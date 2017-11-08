var config = require('config.json');
var _ = require('lodash');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('chats');

var service = {};

service.getAllChat = getAllChat;
service.getChatById = getChatById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;



function getAllChat() {
    var deferred = Q.defer();

    db.chats.find().toArray(function (err, chats) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        chats = _.map(chats, function (chat) {
            return chat;
        });

        deferred.resolve(chats);
    });

    return deferred.promise;
}


function getChatById(_id) {
    var deferred = Q.defer();

    db.chats.findById(_id, function (err, chat) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (chat) {

            deferred.resolve(chat);
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}


function create(chatParam) {
    var deferred = Q.defer();

    createMouvement();


    function createMouvement() {
        var chat = chatParam;

        db.chats.insert(
            chat,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, chatParam) {
    var deferred = Q.defer();

    updateMouvement();


    function updateMouvement() {
        // fields to update
        var set = {
            room: chatParam.room,
            nickname: chatParam.nickname,
            message : chatParam.message,
            updated_at: Date.now,
        };


        db.chats.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.chats.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}