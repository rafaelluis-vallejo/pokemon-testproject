"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const cors_1 = __importDefault(require("cors"));
// import './index.css';
const app = express_1.default();
const database = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pokemon_database'
});
database.connect((err) => {
    if (err)
        throw err;
    console.log('[Message]: Connection Successful!');
});
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post('/api/insert', (req, res) => {
    const pokemonName = req.body.pokemonName;
    const pokemonLvl = req.body.pokemonLvl;
    const pokemonType = req.body.pokemonType;
    const sqlInsert = "INSERT INTO pokemon_species (pokemon_id, pokemon_name, pokemon_lvl, pokemon_type) VALUES(RAND()*(100-5+1)+5, ?, ?, ?);";
    database.query(sqlInsert, [pokemonName, pokemonLvl, pokemonType], (err, result) => {
        console.log(result);
    });
});
// app.get('/', (req, res) => {
//   // FOR TESTING
//     /* 
//     const sqlInsert = "INSERT INTO pokemon_database.pokemon_species (pokemon_id, pokemon_name, pokemon_lvl, pokemon_type) VALUES(RAND()*(100-5+1)+5, 'Torchic', 4, 'Fire');"; 
//     database.query(sqlInsert, (err, result)=> {
//     res.send("[Message]: Values Entered!")
//   });*/
// });
app.listen(3001, () => {
    console.log('[Message]: Running on port 3001...');
});
