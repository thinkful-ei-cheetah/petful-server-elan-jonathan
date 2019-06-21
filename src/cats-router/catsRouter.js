/* eslint-disable strict */
const express = require('express');
const jsonParser = express.json();
const catsRouter = express.Router();
const Queue = require('../queue.js');

const usersRouter = require('../users-router/usersRouter.js');



const cats = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
};

let catQueue = new Queue();
catQueue.enqueue(cats);
let catReturn = catQueue.dequeue();


catsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(catReturn);
  })
  .delete((req, res, next) => {
    catQueue.dequeue();
    res.status(200).json();
  });

module.exports = catsRouter;