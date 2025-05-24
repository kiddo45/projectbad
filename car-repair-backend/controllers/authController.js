// controllers/carController.js
const db = require('../db');

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const [cars] = await db.query('SELECT * FROM auth');
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a car by PlateNumber
exports.getCarByPlateNumber = async (req, res) => {
  try {
    const [car] = await db.query('SELECT * FROM auth WHERE PlateNumber = ?', [req.params.plateNumber]);
    if (car.length === 0) return res.status(404).json({ message: 'Car not found' });
    res.json(car[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new car
exports.createCar = async (req, res) => {
  const { PlateNumber, Type, Model, ManufacturingYear, DriverPhone, MechanicName } = req.body;
  try {
    await db.query(
      'INSERT INTO Car (PlateNumber, Type, Model, ManufacturingYear, DriverPhone, MechanicName) VALUES (?, ?, ?, ?, ?, ?)',
      [PlateNumber, Type, Model, ManufacturingYear, DriverPhone, MechanicName]
    );
    res.status(201).json({ message: 'Car added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a car
exports.updateCar = async (req, res) => {
  const { Type, Model, ManufacturingYear, DriverPhone, MechanicName } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE Car SET Type = ?, Model = ?, ManufacturingYear = ?, DriverPhone = ?, MechanicName = ? WHERE PlateNumber = ?',
      [Type, Model, ManufacturingYear, DriverPhone, MechanicName, req.params.plateNumber]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Car not found' });
    res.json({ message: 'Car updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM Car WHERE PlateNumber = ?', [req.params.plateNumber]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Car not found' });
    res.json({ message: 'Car deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
