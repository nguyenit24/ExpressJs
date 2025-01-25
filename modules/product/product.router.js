const express = require('express');
const productController = require('./product.controller');

const router = express.Router();
const prefix = '/products';
router.get(prefix, productController.getAllProducts);
router.get(`${prefix}/create`, productController.createProduct);
router.post(`${prefix}/create`, productController.postCreateProduct);
router.get(`${prefix}/details/:id`, productController.getDetailProqduct);
router.delete(`${prefix}/details/:id`, productController.deleteProduct);
router.get(`/api${prefix}/details/:id`, productController.getDetailProqductByid);
router.put(`${prefix}/edit/:id`, productController.puteditProduct);
module.exports = router;