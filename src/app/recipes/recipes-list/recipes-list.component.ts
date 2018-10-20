import { Component, OnInit} from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipe: Recipes[] ;

  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipe=this.recipeService.getRecipes();    
  }

}
