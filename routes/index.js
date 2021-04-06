const express = require('express')
const router = express.Router()
const db = require('../db')
const MenuItemMapper = require('../models/menu_item_mapper.js')

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Group D Mexican Grill',
    categories: db.categories
  })
})

router.get('/order', function (req, res, next) {
  res.render('order', {
    title: 'Group D Mexican Grill - Menu',
    items: MenuItemMapper.GetActiveMenu()
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
