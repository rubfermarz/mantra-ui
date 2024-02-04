import { RippleDirective } from './ripple.directive';
import { DebugElement } from '@angular/core';

describe('RippleDirective', () => {
    let element: DebugElement;

    it('should create an instance', () => {
        const directive = new RippleDirective(element);
        expect(directive).toBeTruthy();
    });
});
