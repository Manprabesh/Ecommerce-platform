const express = require('express')
// const app = express()
const router = express.Router()
const userModel = require('../model/user.moodel')
// router.use(express.json())
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


require('dotenv').config()



router.post('/', async (req, res) => {
    try {
        let { email, name } = req.body;
        let password=req.body.password
        console.log(email)
        console.log(name)
        console.log(password)
        if (await userModel.findOne({ email })) {
            res.send("already present")
        }
        else {
            bcrypt.genSalt(8, function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    if (err) {
                        console.log(err.message)
                    }
                    let user = await userModel.create({
                        name,
                        email,
                        password: hash
                    })

                    try {
                        let token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_key);
                        console.log(token)
                        res.cookie('token', token)
                        res.redirect('/profile')
                    } catch (err) {
                        console.log(err.message)
                    }

                });
            });

        }

    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router