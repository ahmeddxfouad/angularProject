import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list.service";
import {Form, NgForm, NgModel} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") slForm!: NgForm;
  subscription!: Subscription;
  editMode: Boolean = false;
  editModeNumber: number = -1;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
   this.subscription = this.shoppingListService.startedEditing.subscribe(
   (index: number) => {
     this.editMode = true;
     this.editModeNumber = index;
     const ing = this.shoppingListService.getIngredient(index);
     this.slForm.setValue({
       name: ing.name,
       amount: ing.amount
     })

    })
  }

    onSubmit(f: NgForm) : void
  {
    const value = f.value;
    const item = new Ingredient(value.name,value.amount);
    console.log("New item:: "+item.name+" "+item.amount);

    if(this.editMode)
    {
      this.shoppingListService.updateItem(this.editModeNumber, item);
    }
    else {
      this.shoppingListService.addNewItem(item);
    }
    this.slForm.reset();
    this.editMode = false;

  }
  onClear(){
    this.editMode=false;
    this.slForm.reset();
  }
  onDelete(){
    this.onClear();
    this.shoppingListService.deleteItem(this.editModeNumber);
  }
  ngOnDestroy() {
    this.shoppingListService.startedEditing.unsubscribe();
  }

}
