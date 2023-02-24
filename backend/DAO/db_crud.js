import mongodb from "mongodb" 
const objid = mongodb.ObjectId

let REG_FORM_COLLECTION_1 

export default class indClass {
    static async injectDB(conn){
        if (REG_FORM_COLLECTION_1) {
            return
        }
        try {
            REG_FORM_COLLECTION_1=await conn.db(process.env.REG_FORM_COLLECTION).collection("Amal")
        } catch (error) {
            console.log(`this is the error: ${error}`)
        }
    }


    static async add_rec(usernmae,password,idno){
        try {
            return await REG_FORM_COLLECTION_1.insertOne({name: usernmae,pswd: password,id: objid(idno)})
        } catch (error) {
            console.log(`cannot be added: ${error}`)
        }
    }
    

    static async upd_rec(usernmae,password,idno2){
        try {
            return await REG_FORM_COLLECTION_1.updateOne({id: idno2},{$set:{name:usernmae,pswd:password}},{multi: true})
        } catch (error) {
            console.log(`cannot be updated: ${error}`)
        }
    }


    static async del_rec( idno){
        try {
            return await REG_FORM_COLLECTION_1.deleteOne({id:idno})
        } catch (error) {
            console.log(`cannot be deleted: ${error}`)
        }
    }
}