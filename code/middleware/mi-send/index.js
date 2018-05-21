module.exports = () => {
  function render(json, retCode, retMsg) {
    this.set('Content-Type', 'application/json')
    this.body = JSON.stringify({
      retCode: retCode || 1,
      errmsg: retMsg || '成功！',
      data: json
    })
  }
  return async (ctx, next) => {
    ctx.send = render.bind(ctx)
    await next()
  }
}
