const express = require('express');
const router = express.Router();
const db = require('../models');
const { Post } = require('../models')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))


//get all
router.get('/', async (req, res) => {
  try {
    res.json(await Post.find({}))
  }
  catch (e) {
    console.log(e)
  }
})

//new post
router.post('/', async (req, res) => {
  try {
    const data = { 
      ...req.body,   
    }
    res.json(await db.Post.create(data));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// get specific post
router.get('/:id', async (req, res) => {
  try{
    res.json(await db.Post.findById(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// update post
router.put('/:id', async (req, res) => {
  try {
    res.json(await db.Post.findByIdAndUpdate(
      req.params.id, 
      req.body,
      {new: true}
      ));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// delete post

router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await db.Post.findByIdAndUpdate(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;
