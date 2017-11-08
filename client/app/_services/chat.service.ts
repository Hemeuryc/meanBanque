import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Chat } from '../_models/index';

@Injectable()
export class ChatService {
    constructor(private http: Http) { }

    getAllChat(room : string) {
        return this.http.get('/chats/'+ room).map((response: Response) => response.json());
    }

    getChatById(_id: string) {
        return this.http.get('/chats/edit/' + _id).map((response: Response) => response.json());
    }

    create(chat: any) {
        return this.http.post('/chats/create', chat);
    }

    update(chat: Chat) {
        return this.http.put('/chats/' + chat._id, chat);
    }

    delete(_id: string) {
        return this.http.delete('/chats/' + _id);
    }
}