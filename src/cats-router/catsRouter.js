/* eslint-disable strict */
const express = require('express');
const jsonParser = express.json();
const catsRouter = express.Router();
const Queue = require('../queue.js');


const cats = [{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
},
{
  imageURL:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjPzNymnfviAhUvmeAKHT03DuoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&psig=AOvVaw0rt8AlD0UHvhMNTmG_fo3i&ust=1561228977845038', 
  imageDescription: 'Cutest cat ever.',
  name: 'Scruffy',
  sex: 'Female',
  age: 2,
  breed: 'Cutie pie',
  story: 'Unknown'
},
];

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