'use strict';
// catRoute
const express = require('express');
const router = express.Router();

router.get('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
});

router.get('/cat/:id', (req, res) => {
    res.send('You request a cat with id ${req.params.id}');
});

router.post('/cat', (req, res) => {
    res.send('With this endpoint you can get cats.');
});
router.put('/cat', (req, res) => {
    res.send('With this endpoint you can edit cats.');
});
router.delete('/cat', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

module.exports = router;