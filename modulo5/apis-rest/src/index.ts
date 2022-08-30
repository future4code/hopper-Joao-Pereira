import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { users } from './data'
import { AddressInfo } from "net"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) =>{
    res.status(200).send(users)
})
// a. Qual método HTTP você deve utilizar para isso?
// Ultilizamos o método .GET

// b. Como você indicaria a entidade que está sendo manipulada?
// Indicamos a entidade com /users









const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})