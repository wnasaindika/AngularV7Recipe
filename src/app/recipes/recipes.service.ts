import { EventEmitter, Injectable } from "../../../node_modules/@angular/core";
import { Recipes } from "./recipes.model";
import { Ingrdatiants } from "../shared/shared.component";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
    selectedRecipe = new EventEmitter<Recipes>();
    private recipe: Recipes[] = [
        new Recipes(
            "Test recipe",
            "What else you nedd to say?",
            "http://www.spicyflames.com.au/img/chefs/1.jpg",
            [
                new Ingrdatiants("meat", 1),
                new Ingrdatiants("rice", 3)
            ]
        ),
        new Recipes(
            "Another Test recipe",
            "What else you nedd to say?",
            "http://www.spicyflames.com.au/img/chefs/1.jpg",
            [
                new Ingrdatiants("meat", 1),
                new Ingrdatiants("rice", 3)
            ]
        )
    ];

    constructor(private slService: ShoppinglistService) {

    }
    getRecipes() {
        return this.recipe.slice();
    }

    getRecipe(id: number) {
        return this.recipe.slice()[id];
    }
    addIngradiantToShoppingList(ingrdiant: Ingrdatiants[]) {
        this.slService.addIngrediantsFromRecipe(ingrdiant);
    }
}