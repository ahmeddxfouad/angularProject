import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef = {} as ElementRef ;
  @ViewChild('amountInput') amountInputRef: ElementRef= {} as ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onAddItem() : void
  {
    const name= this.nameInputRef.nativeElement.value;
    const amount= this.amountInputRef.nativeElement.value;
    const item = new Ingredient(name,amount);
    console.log("New item:: "+item.name+" "+item.amount)
    this.shoppingListService.addNewItem(item);
  }

}
