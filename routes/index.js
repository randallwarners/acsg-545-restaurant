const express = require('express')
const router = express.Router()
const categories = require('../models/categories.js')
const MenuItemMapper = require('../models/menu_item_mapper.js')

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Group D Mexican Grill',
    categories: categories
  })
})

router.get('/order', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Menu',
    items: MenuItemMapper.GetActiveMenu()
  })
})

router.get('/menu', function (req, res, next) {
  res.render('menu', {
    title: 'Group D Mexican Grill - Menu',
    items: MenuItemMapper.GetActiveMenu()
  })
})

router.get('/order/:orderId/item/:itemId', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Order'

    // TODO: Implementation details
    // return list of item parts for the item parameter
  })
})

router.post('/order/:orderId/item/:itemId', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Order'

    // TODO: Implementation details
    // add item to current order in the database, redirect to /order
  })
})

router.get('/order/:orderId/cart', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Cart'

    // TODO: Implementation details
    // return order with items
  })
})

router.get('/order/:orderId/checkout', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Checkout'

    // TODO: Implementation details
    // return order with summarized items
  })
})

router.post('/order/:orderId/item/checkout', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Order Status'

    // TODO: Implementation details
    // update order status
  })
})

router.get('/order/:orderId/status', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Order'

    // TODO: Implementation details
    // return order status
  })
})

router.get('/mission', function (req, res, next) {
  res.render('mission', {
    title: 'Group D Mexican Grill - Mission'
  })
})

router.get('/privacy', function (req, res, next) {
  res.render('privacy', {
    title: 'Group D Mexican Grill - Privacy Policy'
  })
})

router.get('/rewards', function (req, res, next) {
  res.render('rewards', {
    title: 'Group D Mexican Grill - Rewards'
  })
})

router.get('/terms', function (req, res, next) {
  res.render('terms', {
    title: 'Group D Mexican Grill - Terms of Use'
  })
})

router.get('/careers', function (req, res, next) {
  res.render('careers', {
    title: 'Group D Mexican Grill - Careers'
  })
})

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Group D Mexican Grill - Contact Support'
  })
})

router.get('/employee/login', function (req, res, next) {
  res.render('employeeLogin', {
    title: 'Group D Mexican Grill - Employee Login'
  })
})

router.get('/customer/login', function (req, res, next) {
  res.render('customerLogin', {
    title: 'Group D Mexican Grill - Customer Login'
  })
})

module.exports = router
