import app from './server.js';
import mongodb from  "mongodb"
import dotenv from "dotenv"

import db_crud from "./DAO/db_crud.js"
import db_druc from "./DAO/db_druc.js"

dotenv.config()

const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000



MongoClient.connect(process.env.FORM_URL,
    {
        maxpoolSize: 50,wtimeout: 2500,useNewURLParser: true,
    })
    
    .then(
        async client => {
            await db_crud.injectDB(client)
            await db_druc.injectDB(client)
            app.listen(port,()=>{
                console.log("It's ALIVE!!!")
            })
        }
    )
    .catch(error=>console.error(error))





