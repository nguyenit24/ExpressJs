const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
const productRouter = require('./modules/product/product.router')

app.use('/', productRouter);
app.get('/', (req, res) => {
    res.render('index');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})