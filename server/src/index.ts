import bodyParser from 'body-parser';
import express from 'express';
import mysql from 'mysql';
import cors from "cors";
// import './index.css';

const app = express();
const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pokemon_database'
});

  database.connect((err) => {
    if (err) throw err;
    console.log('[Message]: Connection Successful!');
  });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) =>{
  const sqlSelect = "SELECT * FROM pokemon_species";
  database.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post('/api/insert', (req, res)=> {

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

app.listen(3001, () =>{
  console.log('[Message]: Running on port 3001...');
});