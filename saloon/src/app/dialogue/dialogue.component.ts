import { Message } from './../message';
import { Beverage } from './../beverage';
import { Component, OnInit, Input } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  @Input() messageData: Message;  
  firstname: string;
  lastname: string;
  data:Beverage;
  selectedDrink: Beverage;
  showUsual:boolean;
  constructor(private visitorService: VisitorService) { }
  ngOnInit(): void {
    // NOT STRANGER
    if(this.visitorService.getDrinkList() == null)
      this.visitorService.setDrinkList(this.visitorService.getDrinks());
    if(this.visitorService.getFirstName() !== null && this.visitorService.getLastName() !== null){
      this.firstname = this.visitorService.getFirstName();
      this.lastname = this.visitorService.getLastName();
      this.messageData.message = 'Hello again, '+ this.firstname + ' ' + this.lastname +'! The usual?';
      document.getElementById("cocktails-div").style.visibility = "visible";
    }
    else{
      // STRANGER
      this.showUsual = false;
      this.messageData.message = 'Howdy, stranger. Haven\'t seen your face around here before. What\'s your name?';
    }
  }

  drinkSelected(drink){
    this.messageData.message = 'One ' + drink.name + ', coming right up!';
  }
  theUsualSelected(drink){
    this.messageData.message = 'The usual! One ' + drink + ', coming right up!';
  }
  submitNames() {
    if(this.visitorService.getDrinkList() == null)
      this.visitorService.setDrinkList(this.visitorService.getDrinks());
    this.visitorService.setName(this.firstname,this.lastname);
    this.messageData.message = 'Alright '+ this.firstname + ' ' + this.lastname +', what can i do you for?';
    document.getElementById("cocktails-div").style.visibility = "visible";
  }


}
