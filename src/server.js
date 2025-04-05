import express from "express"
import { router } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router)

app.listen(8080, () => {
    console.log('Running 8080');
})


// import pg from "pg"
// const { Pool } = pg;

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'admin123',
//     port: 5432,
//     database: 'postgres'
// })

// 


// app.get("/usuarios", async (request, response) => {
//     const usuarios = await pool.query('SELECT * FROM usuarios')
//     return response.status(200).json(usuarios.rows)
// })



// app.post("/usuarios", async (request, response) => { 
//     const { nome, email } = request.body
//     const usuarios = await pool.query('INSERT INTO usuarios (nome, email) VALUES ($1, $2)', [nome, email])
//     return response.status(200).json(usuarios)
// })

// app.put("/usuario/:id", async (request, response) => {
//     const { nome, email } = request.body;
//     const { id } = request.params;

//     const usuario = await pool.query('UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3', [nome, email, id])
//     return response.status(200).json({nome: nome, email: email})
// })

// app.delete("/usuario/:id", async (request, response) => {
//     const { id } = request.params;

//     const usuario = await pool.query('DELETE FROM usuarios WHERE id = $1', [id])
//     return response.status(204).send()
// })