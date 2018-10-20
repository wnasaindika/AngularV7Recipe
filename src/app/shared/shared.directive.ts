import { Directive, HostBinding, HostListener } from "../../../node_modules/@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class appDropDownDirective {
    @HostBinding('class.dropdown-toggle') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

}