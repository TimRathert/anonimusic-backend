const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
    user:{type: String, required:true},
    post:{type: String, required:true},
    timestamp: Date
});

const PostSchema = new mongoose.Schema ({
    user:{type: String, required:true},
    title:{type: String, required:true},
    description:{type: String},
    file:{type: String, required: true},
    tags: [String],
    comments: [commentSchema],
    timestamp: Date
});

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
