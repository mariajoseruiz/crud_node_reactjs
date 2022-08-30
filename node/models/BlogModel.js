//importar conexion
import db from "../database/db.js";

//importar sequelize
import { DataTypes } from "sequelize";


//definir la conexion, nombre de tabla y campos
const BlogModel=db.define('blogs',{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING},
})

export default BlogModel