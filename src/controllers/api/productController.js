const path = require('path');
const fs = require('fs');
const { fileURLToPath } = require('url');
const { stringify } = require('querystring');
const db = require('../../database/models');

const { Op } = require("sequelize");


const controller = {

    products: async (req, res) => {

        try {
            const products = await db.Products.findAll({ attributes: { exclude: ['specifications', 'price', 'color'] } })

            let response = products.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                specifications: product.specifications,
                color: product.color,
                detail: `/api/products/${product.id}`
            }))


            res.status(200).json(
                {
                    count: products.length,
                    products: response,
                    url: req.originalUrl
                })



        } catch (error) {

            res.status(500).json(error)
        }


    },

    detail: async (req, res) => {

        try {
            let product = await db.Products.findByPk(req.params.id)

            product = {
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                specifications: product.specifications,
                color: product.color,
                image: `localhost:3005/img/productImages/${product.image}`
            }
            res.status(200).json(
                {
                    status: 200,
                    data: product,
                    url: req.originalUrl
                })


        } catch (error) {

            res.status(500).json(error)
        }
    }


}

module.exports = controller;