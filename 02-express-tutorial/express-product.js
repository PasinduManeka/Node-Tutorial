const express = require('express')
const app = express();
const {products} = require('./data');

app.get('/', (req,res)=>{
    res.end('<h1>Home Page</h1><a href="/api/products">Products</a>');
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.json(newProducts)
})

//get particular product
app.get('/api/products/:id',(req,res)=>{
    //console.log(req)
    const {id} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(id))
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist.');
    }
    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log(products)
})