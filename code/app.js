const Koa = require('koa')
const app = new Koa()
const initDb = require('./models/init-db')

const Host = 3000

const middleware = require('./middleware')

middleware(app)
app.listen(Host, () => {
  console.log(`server is running at http://localhost:${Host}`)
})
