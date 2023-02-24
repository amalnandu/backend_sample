import db_crud from "../DAO/db_crud.js"

export default class db_crud_control{
    static async api_Post(req,res,next){
        try {
            let idno=req.body.idno
            let un=req.body.usernmae
            let pwd=req.body.password
            const chk = await db_crud.add_rec(un,pwd,idno)
            res.send({msg: "vaa povaam"})
        } catch (error) {
            console.log(`${error}`)
        }
    }


    static async api_upd(req,res,next){
        try {
            idno=req.body.idno
            un=req.body.usernmae
            pwd=req.body.password
            const chk = await db_crud.upd_rec(un,pwd,idno,5)

        } catch (error) {
            console.log(`${error}`)
        }
    }


    static async api_del(req,res,next){
        try {
            idno=req.body.idno
            un=req.body.usernmae
            pwd=req.body.password
            const chk = await db_crud.del_rec( idno)

        } catch (error) {
            console.log(`${error}`)
        }
    }
}