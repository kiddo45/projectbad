// routes/car.js
const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// CRUD routes
router.get('/', carController.getAllCars);
router.get('/:plateNumber', carController.getCarByPlateNumber);
router.post('/', carController.createCar);
router.put('/:plateNumber', carController.updateCar);
router.delete('/:plateNumber', carController.deleteCar);

module.exports = router;
