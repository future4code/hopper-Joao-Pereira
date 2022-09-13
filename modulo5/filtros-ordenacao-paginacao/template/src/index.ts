import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
     const users = await selectAllUsers()

     if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
     }

     res.status(200).send(users)
     
  } catch (error) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}

export default async function selectAllUsers():Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM aula48_exercicio;
  `)

  return result[0]
}

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});