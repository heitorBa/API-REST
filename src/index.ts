import 'dotenv/config'
import express, { request, response } from "express";
import rotas from './rotas';


const app = express()

app.use(express.json())

app.use(rotas)

app.listen(process.env.PORT)
