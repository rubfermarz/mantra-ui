/** @format */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: MantraButtonComponent;
    let fixture: ComponentFixture<MantraButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MantraButtonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MantraButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have the default color', () => {
        expect(component.color).toEqual('primary');
    });

    it('');
});
