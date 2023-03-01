import express from 'express'
import {Authentication,Users} from '../middleware/index.js'


export const Routes = express.Router()


Routes.post("/create/user", Authentication.signup)
Routes.post("/login", Authentication.login)
Routes.get("/getusers", Users.getuser)
