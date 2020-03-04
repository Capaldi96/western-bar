import { Message } from './message';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saloon';
  parentMessage: Message = {
    message: 'Howdy, stranger. Haven\'t seen your face around here before. What\'s your name?',
  };

  messageFromChild(messageObject){
    this.parentMessage = messageObject;
  }
}
