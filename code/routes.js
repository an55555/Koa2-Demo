const Router = require('koa-router')
const beforeProxyCtl = require('./controller/beforeProxyCtl')

const router = new Router()

router
  .post('/login', beforeProxyCtl.login)
  .get('/rest/api/2/project', beforeProxyCtl.project)

module.exports = router
