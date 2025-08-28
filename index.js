console.clear()
console.log(`API gastos`)

const cors = require(`cors`)
const express = require(`express`)
const mongoose = require(`mongoose`)
const {router} = require(`./router`)

const PORT = 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/expenses"

const conectar = async ()=>{
    await mongoose.connect(DATABASE_URL)
    .then(()=> console.log(`mongoose | conectado a ${DATABASE_URL}`))
    .catch(error => console.log(`mongoose | NO CONECTADO A ${DATABASE_URL}`))
}
conectar()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router)

app.listen(PORT , ()=> console.log(`Iniciando api en el puerto ${PORT}`))