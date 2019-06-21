/* eslint-disable strict */
const express = require('express');
const jsonParser = express.json();
const dogsRouter = express.Router();
const Queue = require('../queue.js');

const dogs = {
  imageURL:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjW3rKyvvviAhXQJt8KHeINBnYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.womansday.com%2Flife%2Fpet-care%2Fg26061710%2Fcute-dog-pictures%2F&psig=AOvVaw1snHQydh5JLDIIxZr9qM4e&ust=1561237860795946', 
  imageDescription: 'Looks like a cat, is really a dog.',
  name: 'Boo',
  sex: 'Female',
  age: 2,
  breed: 'Boo is Boo',
  story: 'Thug life is hard but Boo is hanging in there'
};
const dogs2 ={
  imageURL:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwik-t3ynPviAhVImuAKHT0rCy8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdog%2F&psig=AOvVaw13itURQMmgb0dQwvwiLGa5&ust=1561228862684269', 
  imageDescription: 'White dog.',
  name: 'Happy',
  sex: 'Female',
  age: 3,
  breed: 'Mutt',
  story: 'Never loved'
};
const dogs3 ={
  imageURL:'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg', 
  imageDescription: 'I can hear your heart melting with my giant puppy ears.',
  name: 'Innocent',
  sex: 'Female',
  age: 1,
  breed: 'Postgrestion',
  story: 'Unknown'
};

let dogQueue = new Queue();
dogQueue.enqueue(dogs);
dogQueue.enqueue(dogs2);
dogQueue.enqueue(dogs3);

dogsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(dogQueue.peek());
  })
  .delete((req, res, next) => {
    dogQueue.dequeue();
    res.status(200).json();
  });


  

module.exports = dogsRouter;