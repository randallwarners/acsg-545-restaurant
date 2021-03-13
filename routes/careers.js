const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/careers', function (req, res, next) {
  res.render('careers', {
    title: 'Group D Mexican Grill - Careers'
  })
})

module.exports = router
