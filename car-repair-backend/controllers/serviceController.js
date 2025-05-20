// controllers/serviceController.js
const db = require('../db');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const [services] = await db.query('SELECT * FROM Services');
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single service
exports.getServiceById = async (req, res) => {
  try {
    const [result] = await db.query('SELECT * FROM Services WHERE ServiceCode = ?', [req.params.id]);
    if (result.length === 0) return res.status(404).json({ message: 'Service not found' });
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create service
exports.createService = async (req, res) => {
  const { ServiceName, ServicePrice } = req.body;
  try {
    await db.query('INSERT INTO Services (ServiceName, ServicePrice) VALUES (?, ?)', [ServiceName, ServicePrice]);
    res.status(201).json({ message: 'Service created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update service
exports.updateService = async (req, res) => {
  const { ServiceName, ServicePrice } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE Services SET ServiceName = ?, ServicePrice = ? WHERE ServiceCode = ?',
      [ServiceName, ServicePrice, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete service
exports.deleteService = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM Services WHERE ServiceCode = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
