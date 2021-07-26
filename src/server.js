  
const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')
const userService = require('./Users/UserService')

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
})

setInterval(() => {
  userService.purge()
}, 31000);

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})