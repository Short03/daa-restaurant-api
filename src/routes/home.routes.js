const express = require('express');
const router = express.Router();

router.post('/login', (req, res) =>res.status(200).send('POST /login succeeded'));

module.exports = router;