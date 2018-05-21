const HomeService = require('../service/home')

module.exports = {
  index: async(ctx, next) => {
    await ctx.send({ title: 'home' })
  },
  home: async(ctx, next) => {
    const thisBosy = JSON.parse(ctx.body)
    thisBosy.unshift({test: 134})
    ctx.response.body = thisBosy
  },
  homeParams: async(ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  register: async(ctx, next) => {
    let params = ctx.request.body
    let name = params.name
    let password = params.password
    let res = await HomeService.register(name,password)
    if(res.status === '-1'){
      await ctx.send(res.data)
    }else{
      ctx.state.title = '个人中心'
      await ctx.send(res.data)
    }
  }
}
