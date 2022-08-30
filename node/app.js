import express from 'express'
import cors from 'cors'
//importar conexion
import db from './database/db.js'

//import router from './routes/routes' es lo mismo que lo siguiente
import blogRoutes from './routes/routes.js'

const app=express()
app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)//ruta raiz


try {
   await db.authenticate()
   console.log("CONEXIÓN DB OK")
} catch (error) {
    console.log('Error:',error);
}
/*app.get('/',(req,res)=>{
    res.send("Hola mundo")
})*///se ve en localhost:8000

app.listen(8000,()=>{
    console.log('Server on port 8000')
})