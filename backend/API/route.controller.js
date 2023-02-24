import express from "express"
import db_crud_control from "./db_crud.controller.js"
import db_druc_control from "./db_druc.controller.js"


const router= express.Router()
router.route("/register")
.post(db_crud_control.api_Post)
.put(db_crud_control.api_upd)
.delete(db_crud_control.api_del)





export default router 