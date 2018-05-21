const request = require('request')

module.exports = {
  requestApi: (ctx, options = {}) => {
    return new Promise((resolve, reject) => {
      request({
        method: ctx.method,
        body: JSON.stringify(ctx.request.body),
        headers: {
          'Authorization': `Basic ${ctx.state.auth}`,
          'content-type' : 'application/json'
        },
        ...options,
        uri: `http://jira.mysoft.com.cn${ctx.url}`,
      }, function (error, response, body) {
        const resHead = Object.keys(response.headers)
        resHead.forEach((value) => {
          ctx.set(value, response.headers[value])
        })
        resolve(body)
      })
    })
  }
}
