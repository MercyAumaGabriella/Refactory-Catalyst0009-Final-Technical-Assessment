const express = require('express')
const postRoutes = express.Router()

let Post = require('./form.model')

postRoutes.route('/add').post(function (req, res){
    let post = new Post(req.sname)
    post.save()
    .then(() => {
        res.status(200).json({'Student': 'Student successfully added'})
    })
    .catch(() => {
        res.status(400).send("unable to save to database")
    })
})