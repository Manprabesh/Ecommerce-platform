const array_of_item=[
    {
        product_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_f1OQ-q7bg080Y5uVQgmuZveg6lr5nkwDew&s",
        product_price:"product price",

    },
    {
        product_img:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg",
        product_price:"product price",
    },
    {
        product_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmF7PokmqAfhME1wEDUX42t6XzdFND-Yb8Q&s",
        product_price:"product price",
    },

]

console.log(array_of_item)
const main=document.querySelector('#main');

// array_of_item.forEach(element => {
//     main.innerHTML+=` <div class="container">
//             <div class="item">
//                 <img src=${element.product_img} alt="">
//             </div>
//             <p>${element.product_price}</p>
//             <button>Add to cart</button>
//         </div>`
// });






array_of_item.forEach(element => {
   const container =document.createElement('div')
   container.classList.add('container')
   const item=document.createElement('div')
   item.classList.add('item')
   const img=document.createElement('img');
   img.src=element.product_img
//    alt.src="no image";

   const price=document.createElement('p')
   price.textContent=element.product_price

   const btn=document.createElement('button')
   btn.textContent="Add to cart"

   const text=document.createElement('div');
   text.classList.add('text')
   text.appendChild(price)
   text.appendChild(btn)

   item.appendChild(img)
   container.appendChild(item)
   container.appendChild(text)
//    container.appendChild(btn)
    main.appendChild(container)
});



console.time('fetchTime');
fetch('http://localhost:3000/product')
    .then((response) => response.json())
    .then((data) => {
        console.timeEnd('fetchTime'); // Logs the time taken
        console.log(data, "Fetched Products");
        data.forEach(element => {
            console.log(element.product_name)
            console.log(element.product_description)
        });
        // You can display fetched products if needed
    })
    .catch((err) => {
        console.error('Error fetching products:', err);
    });