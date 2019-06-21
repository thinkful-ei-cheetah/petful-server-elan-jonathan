/* eslint-disable strict */
const express = require('express');
const jsonParser = express.json();
const dogsRouter = express.Router();
const Queue = require('../queue.js');

const dogs = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
};

let dogQueue = new Queue();
dogQueue.enqueue(dogs);
//let dogReturn = dogQueue.dequeue();
let dogReturn = dogQueue.peek();


dogsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(dogReturn);
  })
  .delete((req, res, next) => {
    dogQueue.dequeue();
    res.status(200).json();
  });

module.exports = dogsRouter;