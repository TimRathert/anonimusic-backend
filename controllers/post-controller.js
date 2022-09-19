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
)