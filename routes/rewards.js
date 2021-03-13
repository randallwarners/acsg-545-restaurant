const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/rewards', function (req, res, next) {
  res.render('rewards', {
    title: 'Group D Mexican Grill - Rewards'
  })
})

module.exports = router
