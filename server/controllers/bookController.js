const { Book } = require('../models/Book.js');


const bookController = {
    getAll: (req, res) => {
         let limitbook = req.query.limit;
        Book.find()
        .limit(limitbook)
        .populate({
            path: "writer",
            populate: {
              path: "country",
            },
          })
        .then(data => {
                res.json(data)
            })
         .catch(err => {
                res.status(500).json(err)
            })
    },
    getById: (req, res) => {

        let id = req.params.id

        Book.findById(id).populate("writer")
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(404).json({});
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {

        let book = new Book({
            name: req.body.name,
            description: req.body.description,
            publishDate: req.body.publishDate,
            writer: req.body.writer,
            addDate: req.body.addDate,
        })
        book.save()
        res.json(book)
    },
 
    delete: (req, res) => {
        
        let id = req.params.id;

        Book.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    bookController
}