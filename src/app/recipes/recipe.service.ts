import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.module";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Mes23a',
      'A btngnten and tomato sauce',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg',
      [
        new Ingredient("Tomato",1),
        new Ingredient("Meat",2)
      ]
    )

    ,new Recipe('Pizza',
      'A Pizza Chicken and BBQ sauce',
      'https://lh5.ggpht.com/h0Vig__RkphUhyibB4lUa_BSl997TICPw4aoo34-aj_EzsJvjyA-yH92-jLnorwUKx60v7HruiYC-bqLILnZSA=w1280-h1280-c-rj-v1-e365',
      [
        new Ingredient("Chicken",2),
        new Ingredient("BBQ",1)
      ])

  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
