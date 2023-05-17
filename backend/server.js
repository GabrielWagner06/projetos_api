const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.json({
        message: "bem vindo à API MVC DO SENAC"
    })
});
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});