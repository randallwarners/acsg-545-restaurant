const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const privacyRouter = require('./routes/privacy')
const careersRouter = require('./routes/careers')
const contactRouter = require('./routes/contact')
const missionRouter = require('./routes/mission')
const rewardsRouter = require('./routes/rewards')
const termsRouter = require('./routes/terms')
const menuRouter = require('./routes/menu')

const app = express()

// view engine setup
app.engine('.html', require('ejs').__express)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/', privacyRouter)
app.use('/', careersRouter)
app.use('/', contactRouter)
app.use('/', missionRouter)
app.use('/', rewardsRouter)
app.use('/', termsRouter)
app.use('/', menuRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
