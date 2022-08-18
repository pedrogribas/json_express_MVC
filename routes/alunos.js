import express from "express";
import { promises as fs } from "fs";
const { readFile, writeFile } = fs;
const router = express.Router();

//exibir todos os dados somente com o /
router.get("/", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        console.log(data)
        res.render('classe.ejs',{data:data});
    } catch (err) {
        next(err);
    }
});

//pesquisa de turma turma/ a turma desejada
router.get("/turma/:turma", async (req, res, next) => {
    const classe = req.params.turma;
    if (req.params.turma == "A" || req.params.turma == "B"|| req.params.turma == "C") {
        try {
            const dataAntes = JSON.parse(await readFile(global.fileName));
            console.log(classe)
            let data = [];
            let aluno = dataAntes.map((eachData)=>{
                if(eachData.turma == classe){
                    console.log(data)
                    data.push(eachData);
                }
            })
            console.log(data)
            res.render('classe.ejs',{data:data});
        } catch (err) {
            next(err);
        }
    }
    else{
        console.log(classe)
        res.send("Digite uma turma válida. Turmas: A,B e C")
    }
    
});


export default router;