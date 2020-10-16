import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  constructor(
    private element: ElementRef
  ) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleClass() {
    this.isOpen = !this.isOpen;
  }
}
