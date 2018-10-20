import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../node_modules/@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipesDetialsComponent } from "./recipes/recipes-detials/recipes-detials.component";

const router: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppingListComponent },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipesStartComponent },
            { path: ':id', component: RecipesDetialsComponent }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRouterModule {

}