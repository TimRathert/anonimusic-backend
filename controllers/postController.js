const express = require('express');
const router = express.Router();
const db = require('../models');
const { Post } = require('../models')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))


//get all
router.get('/', async (req, res) => {
  try {
    res.json(await Post.find({},null,{sort: { createdAt: -1 }}))
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
    data.tags = data.tags.split(' ')
    console.log(data)
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
    const data = {
      ...req.body,
    }
    res.json(await db.Post.findByIdAndUpdate(
      req.params.id,
      data,
      {new: true}
      ));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

// new comment post
router.put('/:id/comment', async (req, res) => {
  try{
    const oldData = await db.Post.findById(req.params.id);
    
    const data = {
      comments: 
      [...oldData.comments,
        req.body
      ]

    }
    res.json( await db.Post.findByIdAndUpdate(req.params.id, data, {new: true}))
    } 
  catch(err){
    res.status(400).json(err)
  }
})

// delete post

router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await db.Post.findByIdAndDelete(req.params.id));
  }
  catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;
