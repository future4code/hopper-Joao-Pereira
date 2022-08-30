import express, {Request, Response} from 'express'
import cors from 'cors'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (req: Request, res:Response) => {      
    res.send("Esta API eatá funcionando!")
})

app.get("/products", (req: Request, res:Response) => {
    res.send(products)
})


app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003")
})