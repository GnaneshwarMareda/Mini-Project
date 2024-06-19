const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const app = express()
const path = require('path')
const bcrypt = require('bcrypt')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

const dbPath = path.join(__dirname, 'ForSqlite/app.db')
let db = null

let initializeDb = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    app.listen(3000, () => {
      console.log('Server has started')
    })
  } catch (error) {
    console.log(`Db Error: ${error.message}`)
  }
}

initializeDb()

app.get('/login', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.post('/register/', async (request, response) => {
  let {username, password} = request.body

  let query = `SELECT * FROM users WHERE username = '${username}'`
  let dbResult = await db.get(query)

  if (dbResult === undefined) {
    let hashedPassword = await bcrypt.hash(password, 10)
    let insertQuery = `INSERT INTO users (username,password) VALUES ('${username}','${hashedPassword}')`
    await db.run(insertQuery)
    response.status(201)
    response.send(JSON.stringify('User Created Successfully'))
  } else {
    response.status(400)
    response.send(JSON.stringify('User already exist'))
  }
})

app.post('/login/', async (request, response) => {
  let {username, password} = request.body

  let query = `SELECT * FROM users WHERE username = '${username}'`
  let dbResult = await db.get(query)

  if (dbResult === undefined) {
    response.status(400)
    response.send(JSON.stringify('Invalid User'))
  } else {
    let matched = await bcrypt.compare(password, dbResult.password)

    if (matched) {
      response.status(201)
      response.send(JSON.stringify('Signing In...'))
    } else {
      response.status(400)
      response.send(JSON.stringify('Invalid User'))
    }
  }
})

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'app_index.html'))
})

app.post('/post/', async (request, response) => {
    const {organization, title, description, course_reference, domain} =
    request.body
    
    const domainTables = {
    ai: 'ai_table',
    ml: 'ml_table',
    ds: 'ds_table',
    webd: 'webd_table',
    dsa: 'dsa_table',
    devops: 'devops_table',
    bct: 'bct_table',
    cs: 'cs_table',
    }
    
    const tableName = domainTables[domain]
    
    if (tableName) {
    const query = `INSERT INTO ${tableName} (organization, title, description, course_reference) VALUES ('${organization}','${title}','${description}','${course_reference}')`
    await db.run(query)
    response.status(201)
    response.send(JSON.stringify('Post added successfully'))
    } else {
    response.status(400)
    response.send(JSON.stringify('Invalid domain'))
    }
    })