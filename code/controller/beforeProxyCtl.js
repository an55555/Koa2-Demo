const util = require('../lib/util')
const model = require('../models/model')

const Pet = model.Pet
var now = Date.now();

module.exports = {
  login: async(ctx, next) => {
    const result = await Pet.create({
      Id: 'g-' + now,
      name: 'Gaffey',
    })
    console.log('created.' + JSON.stringify(result));
    await ctx.send(
      { btnName: 'GoGoGo' }
      )
  },
  project: async(ctx, next) => {
    const result = await util.requestApi(ctx)
    ctx.body = result
  }
}
