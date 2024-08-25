const express = require('express');
const router = express.Router();
const product_model = require('../model/product.model')
const path=require('path')

router.post("/", async (req, res) => {
    let { product_name, product_description } = req.body
    let product_details = await product_model.create({
        product_name,
        product_description
    })
    // res.json(product_details)
    console.log(product_description)
    console.log(product_name)
    // res.end()
    res.sendFile(path.join(__dirname,'../public','item.html'))

})

router.get("/", async (req, res) => {
    const products = await product_model.find();  // Adjust this based on how you want to retrieve data
    res.json(products);
});

module.exports = router