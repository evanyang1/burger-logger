const router = require('express').Router()
const { User, Item } = require('../models')

// GET all users
router.get('/users', (req, res) => User.findAll()
  .then(users => res.json(users))
  .catch(e => console.error(e)))

// GET one user
router.get('/users/:username', (req, res) => User.findOne({ where: { username: req.params.username }, include: [Item] })
  .then(data => res.json(data))
  .catch(e => console.error(e)))

// POST an user
router.post('/users', (req, res) => User.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// PUT an user
router.put('/users/:id', (req, res) => User.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// DELETE an user
router.delete('/users/:id', (req, res) => User.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router
