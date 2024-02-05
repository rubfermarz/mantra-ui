/** @format */

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[mantraRipple], [mantra-button]',
    standalone: true,
})
export class RippleDirective {
    constructor(protected elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    @HostListener('click', ['$event']) onClick($event: MouseEvent) {
        this.createRipple($event);
    }

    private createRipple($event: MouseEvent) {
        const targetElement = this.elementRef.nativeElement;
        const rippleElement: HTMLSpanElement = document.createElement('span');
        const diameter = Math.max(
            targetElement.clientWidth,
            targetElement.clientHeight
        );
        const radius = diameter / 2;

        rippleElement.style.width =
            rippleElement.style.height = `${diameter}px`;
        rippleElement.style.left = `${$event.clientX - (targetElement.offsetLeft + radius)}px`;
        rippleElement.style.top = `${$event.clientY - (targetElement.offsetTop + radius)}px`;
        rippleElement.classList.add('ripple');

        const ripple = targetElement.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        targetElement.appendChild(rippleElement);
    }
}
