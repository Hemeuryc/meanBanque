"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getAllChat = function (room) {
        return this.http.get('/chats/' + room).map(function (response) { return response.json(); });
    };
    ChatService.prototype.getChatById = function (_id) {
        return this.http.get('/chats/edit/' + _id).map(function (response) { return response.json(); });
    };
    ChatService.prototype.create = function (chat) {
        return this.http.post('/chats/create', chat);
    };
    ChatService.prototype.update = function (chat) {
        return this.http.put('/chats/' + chat._id, chat);
    };
    ChatService.prototype.delete = function (_id) {
        return this.http.delete('/chats/' + _id);
    };
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map