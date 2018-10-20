import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipes-detials',
  templateUrl: './recipes-detials.component.html',
  styleUrls: ['./recipes-detials.component.css']
})
export class RecipesDetialsComponent implements OnInit {
  //
  recipe: Recipes;
  id: number;
  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddtoShoppingList() {
    this.recipeService.addIngradiantToShoppingList(this.recipe.ingradiants);
  }
}
