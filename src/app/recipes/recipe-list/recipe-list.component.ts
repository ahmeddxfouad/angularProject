import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('Mes23a', 'A btngnten and tomato sauce','https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg' )
    ,new Recipe('Pizza', 'A Pizza Chicken and BBQ sauce','https://lh5.ggpht.com/h0Vig__RkphUhyibB4lUa_BSl997TICPw4aoo34-aj_EzsJvjyA-yH92-jLnorwUKx60v7HruiYC-bqLILnZSA=w1280-h1280-c-rj-v1-e365' )

  ];
  constructor() { }

  onSelectedRecipe(rec: Recipe)
  {
    this.selectedRecipe.emit(rec);
  }

  ngOnInit(): void {
  }

}
