const router = require('express').Router()
const { Item } = require('../models')

// GET all items
router.get('/items',
  (req, res) => Item.findAll()
    .then(items => res.json(items))
    .catch(e => console.error(e)))

// POST an item
router.post('/items',
  (req, res) => Item.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e)))

// PUT an item
router.put('/items/:id',
  (req, res) => Item.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e)))

// DELETE an item
router.delete('/items/:id',
  (req, res) => Item.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e)))

module.exports = router
