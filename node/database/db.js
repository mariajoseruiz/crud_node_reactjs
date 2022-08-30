import { Sequelize } from "sequelize";

const db=new Sequelize('db_crudreact','root','130600Ma/',{
    host:'localhost',
    port:'3307',
    dialect:'mysql'
})

export default db 