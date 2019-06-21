/* eslint-disable strict */
const express = require('express');
const jsonParser = express.json();
const catsRouter = express.Router();
const Queue = require('../queue.js');


const cats = {
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
};
const cats2 = {
  imageURL:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjPzNymnfviAhUvmeAKHT03DuoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&psig=AOvVaw0rt8AlD0UHvhMNTmG_fo3i&ust=1561228977845038', 
  imageDescription: 'Cutest cat ever.',
  name: 'Scruffy',
  sex: 'Female',
  age: 4,
  breed: 'Cutie pie',
  story: 'Unknown'
};

const cats3 = {
  imageURL:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi-0732p_viAhUSm1kKHT6FAd8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.petsworld.in%2Fblog%2Fcat-pictures-funny-cute-adorable-and-all-time-favorite-cat-images.html&psig=AOvVaw1wLiG787kTdF-w1nTzocAp&ust=1561231829598670', 
  imageDescription: 'Harry and Patter sittin in a tree, K I S S I N G',
  name: 'Harry and Patter',
  sex: 'Male and Male',
  age: 1,
  breed: 'Tabby',
  story: 'Typical kitten story'
};

const cats4 = {
  imageURL:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiA4_biq_viAhXFnOAKHXswDlwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.livescience.com%2F65030-usda-kitten-cannibalism-research.html&psig=AOvVaw3dIaWNIeqOGdin9pD_jjsy&ust=1561232860089731', 
  imageDescription: 'Typical back leg splayed posture of kitten on tile',
  name: 'Takemehome',
  sex: 'Male',
  age: 1,
  breed: 'Exotic shorthair',
  story: 'Discovered in a kitchen'
};



let catQueue = new Queue();

catQueue.enqueue(cats);
catQueue.enqueue(cats2);
catQueue.enqueue(cats3);
catQueue.enqueue(cats4);

catsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(catQueue.peek());
  })
  .delete((req, res, next) => {
    catQueue.dequeue();
    res.status(200).json();
  });

module.exports = catsRouter;