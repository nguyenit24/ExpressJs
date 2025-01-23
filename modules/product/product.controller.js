const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const e = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

let products = [
    {
        id: 1,
        name: 'Iphone 12',
        price: 1000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
    },
    {
        id: 2,
        name: 'Iphone 13',
        price: 1200,
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
    },
    {
        id: 3,
        name: 'Iphone 14',
        price: 1300,
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
    },
    {
        id: 4,
        name: 'Iphone 15',
        price: 1400,
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
    }
]

exports.getAllProducts = (req, res) => {
    const data = {
        title: 'DuyNuyen 2025',
        message: 'Hello World',
    }
    res.render('product/index', {
        title: data.title,
        message: data.message,
        products: products
    });
}

// app.get('/details/:id', (req, res) => {
//     const { id } = req.params;
//     res.json(`DuyNuyen ${id}`);
// })

exports.createProduct = (req, res) => {
    res.render('product/create');
}

exports.postCreateProduct = (req, res) => {
    const { name, price, image } = req.body;
    products.push({
        id: products.length + 1,
        name: name,
        price: price,
        image: image
    });
    res.json(products);
}


