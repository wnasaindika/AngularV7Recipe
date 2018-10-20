import { Ingrdatiants } from "../shared/shared.component";
import { EventEmitter } from "../../../node_modules/@angular/core";

export class ShoppinglistService {

    ingradiantChange = new EventEmitter<Ingrdatiants[]>();

    private ingradiants: Ingrdatiants[] = [
        new Ingrdatiants("Apple", 5),
        new Ingrdatiants("Tomato", 10)
    ]

    getIngradiants() {
        return this.ingradiants.slice();
    }

    addIngradiants(ingradinats: Ingrdatiants) {
        this.ingradiants.push(ingradinats);
        this.ingradiantChange.emit(this.ingradiants.slice());
    }

    addIngrediantsFromRecipe(ingradiants: Ingrdatiants[]) {
        this.ingradiants.push(...ingradiants);
        this.ingradiantChange.emit(this.ingradiants.slice());
    }
}