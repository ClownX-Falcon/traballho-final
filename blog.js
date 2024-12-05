const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    comments: [{
        user: String,
        comment: String,
        date: Date
    }]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
