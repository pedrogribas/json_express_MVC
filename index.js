import express from "express";
import {promises as fs} from "fs";
const { readFile, writeFile} = fs;
import alunosRouter from "./routes/alunos.js"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = 3000;
global.fileName = "alunos.json";

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');



app.listen(port, async () => {    
    try {
    await readFile(global.fileName);
    console.log("ok")
    } catch (err) {
        console.log(err)
    }       
});
app.use("/", alunosRouter);
