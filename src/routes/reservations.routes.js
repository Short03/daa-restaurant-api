const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).send('GET /reservations succeede'));
router.post('/', (req, res) => res.status(201).send('POST /reservations succeede'));
router.get('/:id', (req, res) => res.status(200).send('GET /reservations/:id succeede'));
router.put('/:id', (req, res) => res.status(200).send('PUT /reservations/:id succeede'));
router.delete('/:id', (req, res) => res.status(204).send('DELETE /reservations/:id succeede'));

module.exports = router;