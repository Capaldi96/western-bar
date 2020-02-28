import { Beverage } from './../beverage';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  beverages: Beverage[];
  selectedBeverage: Beverage;
  @Input('parentData') public showCocktails: boolean = false;
  
  @Output() sendData = new EventEmitter<object>();

  constructor(private visitorService: VisitorService) { }

  onSelect(beverage:Beverage): void{
    this.visitorService.setLastDrink(beverage);
    this.selectedBeverage = beverage;
    this.sendData.emit(beverage);
  }
  getBeverages():void{
    this.beverages = this.visitorService.getDrinks();
  }

  ngOnInit(): void {
    this.getBeverages();
    if(this.visitorService.getFirstName() !== null){
      this.showCocktails = true;
    }
  }

}
