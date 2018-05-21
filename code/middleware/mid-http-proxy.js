const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer({
  target: 'http://jira.mysoft.com.cn'
})

module.exports = () => {
  return async (ctx, next) => {
    proxy.web(ctx.req, ctx.res, proxy)
    ctx.body = ctx.res
    await next()
  }
}
