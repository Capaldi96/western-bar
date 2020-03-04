import { Component, OnInit, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  @Output() deleteCustomer = new EventEmitter<Object>();
  messageObject = {
    message: 'Who are you again?',
  }
  lastDrink:string;

  constructor(private visitorService: VisitorService, private renderer:Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }
  forgetCustomer(){
    this.visitorService.removeInfo();
    this.deleteCustomer.emit(this.messageObject);
    document.getElementById("cocktails-div").style.visibility = "hidden";
    let ul = document.getElementById("ulList");
    let li = document.getElementsByTagName("li");
    while(li.length > 6) {
      ul.removeChild(li[li.length-1]);
    }
    let usual = document.getElementById("theUsual");
    if(usual != null){
      usual.style.visibility = "hidden";
    }

  }

}
