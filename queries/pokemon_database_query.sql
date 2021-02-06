SELECT * FROM pokemon_species;
SELECT * FROM pokemon_types;

INSERT INTO pokemon_types (pokemon_type) VALUES('leaf');
INSERT INTO pokemon_species (pokemonId, pokemonName, pokemonLvl, pokemonType) VALUES(RAND()*(100-5+1)+5, 'Torchic', 4, 'Fire');