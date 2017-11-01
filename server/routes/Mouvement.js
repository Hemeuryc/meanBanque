var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Mouvement = require('../../models/Mouvement.js');

/* GET ALL MOUVEMENTS */
router.get('/', function(req, res, next) {
  Mouvement.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Mouvement BY ID */
router.get('/:id', function(req, res, next) {
  Mouvement.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Mouvement */
router.post('/', function(req, res, next) {
  Mouvement.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Mouvement */
router.put('/:id', function(req, res, next) {
  Mouvement.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Mouvement */
router.delete('/:id', function(req, res, next) {
  Mouvement.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
