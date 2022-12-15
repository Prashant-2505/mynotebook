
const connectToMongo = require ('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 5000;

// if we want to send or use use the req then we have to use  this --->> middleware
app.use(express.json())

// available routes 
// where /api/auth are the endpoint (name ) if user hit at that endpoint user will direct to route of thet api whic is ./routes.auth
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port,()=>
{
    console.log(`server running at ${port}`)
})
