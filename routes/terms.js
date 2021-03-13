const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/terms', function (req, res, next) {
  res.render('terms', {
    title: 'Group D Mexican Grill - Terms of Use'
  })
})

module.exports = router
