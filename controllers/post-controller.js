const express = require('express');
const router = express.Router();
const { Post } = require('../models')

//get all
router.get('/', async (req, res, next) => {
  try {
    res.json(await Post.find({}))
  }
  catch (e) {
    console.log(e)
  }
})

//new post
router.post('/', async (req, res, next) => {
  const url = 'https://api.cloudinary.com/v1_1/anonimusic/video/upload'
  try {
    //this doesn't work
    const newFile = await fetch(url, {
      method: 'POST',
      file: `${req.body}`,
      upload_preset: 'test-value',
      folder: 'Anonimusic',
      signature: 'beans',
      headers:{
        authorization: Basic '499475411112339:o8Yz0ZJ3YJkzCmqx1MI8jXnlLZA'
      }

    }
      
    );
    const data = await response.json();
    console.log(data)
    
   /*  const newPost =  {
      ...req.body,
      user: 'figure out auth',
      file: 'file path',

  } */
)

// get specific post

// update post

// delete post

