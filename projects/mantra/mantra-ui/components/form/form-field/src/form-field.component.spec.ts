/** @format */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraButtonComponent } from './form-field.component';

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
});
