const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/privacy', function (req, res, next) {
  res.render('privacy', {
    title: 'Group D Mexican Grill - Privacy Policy'
  })
})

module.exports = router
