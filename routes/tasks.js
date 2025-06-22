const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

router.post('/', auth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.userId });
  await task.save();
  res.status(201).json(task);
});

router.put('/:id', auth, async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.userId }, req.body, { new: true });
  res.json(task);
});

router.delete('/:id', auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.status(204).end();
});

module.exports = router;
