const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const miSend = require('./mi-send')
const auth = require('./auth')
const httpProxy = require('./mid-http-proxy')
const routes = require('../routes')

module.exports = (app) => {
  app.use(staticFiles(path.resolve(__dirname, '../public')))
  app.use(bodyParser())
  app.use(miSend())
  app.use(auth())
  app.use(routes.routes())
    .use(routes.allowedMethods())
  app.use(httpProxy())
}
