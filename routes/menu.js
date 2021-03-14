const express = require('express')
const router = express.Router()
const db = require('../db')


router.get('/menu', function (req, res, next) {
    res.render('menu', {
        title: 'Group D Mexican Grill - Menu',
        categories: db.categories
    })
})

module.exports = router
