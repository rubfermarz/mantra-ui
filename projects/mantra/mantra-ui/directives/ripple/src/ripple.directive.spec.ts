/** @format */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RippleDirective } from './ripple.directive';
import { Component } from '@angular/core';

@Component({
    template: '<button mantra-button color="primary">Button</button>',
})
export class ButtonComponent {
    onClick() {}
}

describe('RippleDirective', () => {
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [ButtonComponent],
            providers: [],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(ButtonComponent);
            });
    });

    it('should do a click', (): void => {
        TestBed.runInInjectionContext((): void => {
            const directive: RippleDirective = new RippleDirective(
                fixture.debugElement
            );
            directive.onClick(new MouseEvent('click'));
            //Second click to check if the ripple is removed
            directive.onClick(new MouseEvent('click'));
            expect(directive).toBeTruthy();
        });
    });
});
