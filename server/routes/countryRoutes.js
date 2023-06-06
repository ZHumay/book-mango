const express = require('express');
const {countryController} = require('../controllers/countrycontroller')

const countryRoutes = express.Router();

countryRoutes.get('/', countryController.getAll)
countryRoutes.get('/:id', countryController.getById)
countryRoutes.delete('/:id', countryController.deleteById)
countryRoutes.post('/', countryController.add)



module.exports = {
    countryRoutes
}