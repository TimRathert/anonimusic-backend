const express = require('express');
const router = express.Router();
const { Post } = require('../models')
const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   secure: true,
// })

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
    res.json(await Post.create(req.body));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// get specific post
router.get(':id', async (req, res) => {
  try{
    res.json(await Post.findById(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// update post
router.put('/:id', async (req, res) => {
  try {
    res.json(await Post.findByIdAndUpdate(
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
    res.json(await Post.findByIdAndUpdate(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;
