// routes/services.js
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// CRUD Routes
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.post('/', serviceController.createService);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;
