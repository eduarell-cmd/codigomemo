const express = require('express')
const cors = require('cors')
const app = express()

const contadorRouter = require('./src/routes')

app.use(express.static('public'))
app.use(express.json());
app.use('/', contadorRouter);

const PORT = 80;
app.listen(PORT,()=>{
    console.log(`server jalando en ${PORT}`);
})
