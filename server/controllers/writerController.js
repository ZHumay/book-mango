const { Book } = require('../models/Book.js');
const { Writer } = require('../models/Writer.js');
// const {Country} = require('../models/Country.js')

const writerController = {
    getAll: (req, res) => {

        Writer.find()
            .populate("country")
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {

        let id = req.params.id;

        Writer.findById(id)
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(404).json({ 'msg': 'Not found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {

        let writer = new Writer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            country: req.body.country,
            addDate: req.body.addDate,
        })

        writer.save();

        res.json(writer);
    },
    deleteById: (req, res) => {

        let id = req.params.id;
        
        Writer.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
}


module.exports = {
    writerController
}
