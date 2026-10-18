const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('DB connected'))
    .catch((error) => console.log('MongoDB Error:', error.message))

const Blog = mongoose.model('Blog',
    {
        newTitle: String,
        newContent: String,
        date: String,
        likes: Number
    },
    "Blog")

app.get('/api/blogs', async function (req, res) {
    try {
        const blogs = await Blog.find({})
        res.send(blogs)
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.post('/api/blogs', async (req, res) => {
    const blog = new Blog({
        newTitle: req.body.newTitle,
        newContent: req.body.newContent,
        date: req.body.date,
        likes: req.body.likes
    })

    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.patch('/api/blogs/like/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { $inc: { likes: 1 } },
            { new: true }
        );

        res.json(updatedBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/api/blogs/:id', async function (req, res) {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id)

        if (!deletedBlog) {
            return res.status(404).json({
                message: 'Blog not found'
            });
        }

        res.status(200).json({
            message: 'Deleted'
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.listen(5000, function () {
    console.log('Server started...')
})