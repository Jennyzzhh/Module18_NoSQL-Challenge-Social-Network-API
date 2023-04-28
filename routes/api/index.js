const route = require('express').Router()
const userRoutes = require('./userRoutes')
const thoughtRoutes = require('./thoughtRoutes')
//http://localhost:3001/api/users
route.use('/users',userRoutes)
//http://localhost:3001/api/thoughts
//endpoint 
route.use('/thoughts',thoughtRoutes)

module.exports = route;