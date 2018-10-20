import { Ingrdatiants } from "../shared/shared.component";

export class Recipes {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingradiants: Ingrdatiants[];
    constructor(name: string, desc: string, imag: string, ingradiant: Ingrdatiants[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imag;
        this.ingradiants = ingradiant;
    }
}