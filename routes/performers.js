const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/performers');

/* This router is mounted to a "starts with" path of '/' */

// GET /performers/new (new functionality - render new performer form)
router.get('/performers/new', performersCtrl.new);

// POST /performers (create functionality - create a new performer)
router.post('/performers', performersCtrl.create);

// POST /movies/:id/performers (add performer to movie's cast)
router.post('/movies/:id/performers', performersCtrl.addToCast);



module.exports = router;
