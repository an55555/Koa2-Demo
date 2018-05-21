module.exports = () => {
  return async (ctx, next) => {
    const auth = new Buffer('lanjz:Ljz!@#123').toString('base64')
    ctx.state.auth = auth
    ctx.request.header['Authorization'] = `Basic ${auth}`
    ctx.request.header['content-type'] = 'application/json'
    await next()
  }
}
