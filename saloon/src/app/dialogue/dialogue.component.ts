import { Beverage } from './../beverage';
import { Component, OnInit, Input } from '@angular/core';
import { VisitorService } from '../visitor.service';




@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  firstname: string;
  lastname: string;
  message:string;
  data:Beverage;
  selectedDrink;
  showStrangerDiv:boolean = true;
  showCocktails:boolean;
  showUsual:boolean;
  constructor(private visitorService: VisitorService) { }
  ngOnInit(): void {
    // NOT STRANGER
    if(localStorage.getItem('firstname') !== null && localStorage.getItem('lastname') !== null){
      this.showStrangerDiv = false;
      this.showUsual = true;
      this.firstname = this.visitorService.getFirstName();
      this.lastname = this.visitorService.getLastName();
      this.message = 'Hello again, '+ this.firstname + ' ' + this.lastname +'! The usual?';
    }
    else{
      // STRANGER
      this.showStrangerDiv = true;
      this.message = 'Howdy, stranger. Haven\'t seen your face around here before. What\'s your name?';
    }
  }
  forgetCustomer(){
    this.visitorService.removeInfo();
    this.message = 'Who are you again??';
    this.showStrangerDiv = true;
    this.showUsual = false;
    this.showCocktails = false;
  }
  drinkSelected(drink){
    this.message = 'One ' + drink.name + ', coming right up!';
  }
  theUsualSelected(drink){
    this.message = 'One ' + drink + ', coming right up!';
  }
  submitNames() {
    this.visitorService.setName(this.firstname,this.lastname);
    this.showCocktails = true;
    this.showStrangerDiv = false;
    this.message = 'Alright '+ this.firstname + ' ' + this.lastname +', what can i do you for?';
  }


}
