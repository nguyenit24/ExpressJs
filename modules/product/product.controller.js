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
        products
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
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: name,
        price: price,
        image: image
    });
    res.json(products);
}

exports.puteditProduct = (req, res) => {
    const { name, price, image } = req.body;
    const { id } = req.params;
    const index = products.findIndex(product => product.id == parseInt(id));
    products[index] = {
        id: parseInt(id),
        name: name,
        price: price,
        image: image
    }
    res.json(products);
}
exports.getDetailProqduct = (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === parseInt(id));
    res.render('product/detail', { product });
}
exports.getDetailProqductByid = (req, res) => {
    try {
        const { id } = req.params;
        const product = products.find(product => product.id === parseInt(id));
        res.json(product);
    } catch (error) {
        res.json(500 + "Error: " + error);
    }
}

exports.deleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        const index = products.findIndex(product => product.id === parseInt(id));
        products.splice(index, 1);
        products = products.map((product, index) => {
            product.id = index + 1;
            return product;
        });
        res.json(200);
    } catch (error) {
        res.json(500 + "Error: " + error);
    }
}

