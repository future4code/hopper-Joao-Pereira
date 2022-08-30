import express, { Express, Response, Request } from "express";
import cors from 'cors'
import { tarefas } from "./data"

const app: Express = express();

app.use(express.json()),
app.use(cors())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/ping", (req: Request, res: Response) => {
    
    res.send("Pong!")
})

app.get("/afazeres"), (req: Request, res: Response) => {
    const currentTarefas = tarefas
    console.log(1, currentTarefas)
}