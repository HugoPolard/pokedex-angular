import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : String[]

  constructor() { 
    this.messages = []
  }

  add(message : String){
    if (message != null)
      this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
