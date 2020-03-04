import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-usual',
  templateUrl: './usual.component.html',
  styleUrls: ['./usual.component.css']
})
export class UsualComponent implements OnInit {
  @Input('parentData') public showUsual: boolean = false;
  @Output() sendUsualData = new EventEmitter<object>();
  lastDrink;

  constructor(private visitorService: VisitorService) { }
  
  theUsual(){
    this.lastDrink = this.visitorService.getLastDrink();
    this.sendUsualData.emit(this.lastDrink);
  }
  ngOnInit(): void {
    if(this.visitorService.getLastDrink() !== null){
      this.showUsual = true;
    }
  }
}
