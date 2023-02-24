import query from "express"
import mongodb from "mongodb"


let REG_FORM_COLLECTION_2 

export default class indClass2 {
    static async injectDB(conn){
        if (REG_FORM_COLLECTION_2) {
            return
        }
        try {
            REG_FORM_COLLECTION_2=await conn.db(process.env.REG_FORM_COLLECTION).collection("Amal")
        } catch (error) {
            console.log(`this is the error: ${error}`)
        }
    }
}