require ('dotenv').config();
const express = require ('express'),
    massive = require ('massive'),
    app = express (),
    { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require ('./controllers/products_controller')

app.use (express.json())

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized:false}
}).then (dbInstance => {
    app.set ('db', dbInstance)
    console.log ('db connected')
}).catch (err => console.log(err))

app.get('/api/products', ctrl.getAll)
app.get ('/api/products/:id', ctrl.getOne)
app.post ('/api/products', ctrl.create)
app.put ('/api/products/:id', ctrl.update)
app.delete ('/api/products/:id', ctrl.delete)

app.listen (SERVER_PORT, () => console.log (`Connecting your first full stack on port ${SERVER_PORT}`))