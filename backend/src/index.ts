import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {
        nome: "Ana", 
        idade: 30
    },
    {
        nome: "João", 
        idade: 20
    }
];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const novoUsuario = req.body;
    users.push(novoUsuario);
    res.status(201).json(users);
});

app.listen(port, () => {
    console.log(`A API subiu na porta ${port}`)
});