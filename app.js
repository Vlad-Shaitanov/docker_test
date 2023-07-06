import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
import fs from "fs";
import chalk from "chalk";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'pages'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ?? 3000;
const logsPath = path.resolve(__dirname, 'data', 'logs.txt');

app.get('/', async (req, res) => {
    let newData = '';

    fs.readFile(logsPath, 'utf-8', (err, data) => {
        if (err) throw err;
        newData = data;
        const logs = newData.split('\n').filter(i => !!i);
        console.table(chalk.magenta('logs', logs));
        res.render('index', {logs});
    });
})

app.post('/', async (req, res) => {
    const text = req.body.text;
    fs.appendFile(logsPath, `${text}\n`, (err) => {
        if (err) throw err;
    });
    res.redirect('/');
})

app.listen(port, () => console.log(chalk.bold.green(`Server listening on port ${port}`)));
