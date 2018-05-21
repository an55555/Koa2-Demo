const Router = require('koa-router')
const afterProxyRouters = new Router()
const HomeController = require('../controller/home')
afterProxyRouters.get( '/', HomeController.index )
  .get('/rest/api/2/project', HomeController.home)
  .get('/home/:id/:name', HomeController.homeParams)
  .post('/login', (ctx, next) => {
    console.log('afterLogin')
  })
  .post('/user/register', HomeController.register)

module.exports = afterProxyRouters
