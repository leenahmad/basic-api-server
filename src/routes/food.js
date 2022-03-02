'use strict';

const express = require('express');
const {Food} =require('../models/index.js');
const router = express.Router();

//Routes
router.get('/food',getFood);
router.get('/food/:id',getOneFood);
router.post('/food',createFood);
router.delete('/food/:id',deleteFood);
router.put('/food/:id',updateFood)


//functions
// localhost:3000/food
// to get food 
async function getFood(req,res){
    let food = await Food.findAll();
    res.status(200).json(food);
}


// localhost:3000/food/3
// to find food by id 
async function getOneFood(req,res){
    let foodid = parseInt(req.params.id);
    console.log(foodid)
    let food = await Food.findOne({where:{id:foodid}});
    console.log('inside function',food);
    res.json(food);
}

// localhost:3000/food 
//  create food
async function createFood(req,res){
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(200).json(food);
}

// localhost:3000/1
// delete food
async function deleteFood(req,res){
    let foodId = parseInt(req.params.id);
    let food = await Food.destroy({where:{id:foodId}});
    res.status(204).json(food);
}

// localhost:3000/2
// update food 
async function updateFood(req,res){
    let foodId = parseInt(req.params.id);
  
    let foodObj = req.body;
  
    let foodData = await Food.findOne({where: {id: foodId}});
    await foodData.update(foodObj);
    res.status(200).send(foodData);
  }



module.exports = router;