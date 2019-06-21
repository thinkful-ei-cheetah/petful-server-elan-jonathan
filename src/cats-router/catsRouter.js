const express = require('express')
const jsonParser = express.json()
const catsRouter = express.Router()

catsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json({
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    })
  })

  module.exports = catsRouter