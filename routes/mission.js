const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/mission', function (req, res, next) {
  res.render('mission', {
    title: 'Group D Mexican Grill - Mission'
  })
})

module.exports = router
