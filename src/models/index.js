'use strict';

const {Sequelize, DataTypes} = require('sequelize'); // npm i pg sequelize
const food = require('./food.js');
const music = require('./music.js');

// prepare the connection
const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);



module.exports = {
    db: sequelize, //for real connection and will use it in index.js
    Food: food(sequelize,DataTypes),// for creating the table and will use it in our routes
    Music: music(sequelize,DataTypes)
}