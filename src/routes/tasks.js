const express = require('express');
const router = express.Router();
const controller = require('../controller/task-controller');
const { validateCreate } = require('./../validators/task-validator');

router.get('/', function(req, res) {
    const tasks = controller.find(req.query.status ?? null);
    res.json(tasks);
});

router.post('/', validateCreate, function(req, res) {
    const task = controller.create(req.body.title, req.body.description, req.body.status);
    res.status(201).json(task);
});

module.exports = router;