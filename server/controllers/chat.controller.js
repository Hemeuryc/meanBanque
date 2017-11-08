var config = require('config.json');
var express = require('express');
var router = express.Router();
var chatService = require('services/chat.service');

// routes
router.post('/create', newChat);
router.get('/:room', getAllChat);
router.put('/:_id', update);
router.delete('/:_id', _delete);
router.get('/edit/:_id', getChatById);

module.exports = router;


function newChat(req, res) {
    chatService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAllChat(req, res) {
    chatService.getAllMouvement(req.params.room)
        .then(function (chats) {
            res.send(chats);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getChatById(req, res) {
    chatService.getChatById(req.params._id)
        .then(function (chat) {
            if (chat) {
                res.send(chat);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    chatService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    chatService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


