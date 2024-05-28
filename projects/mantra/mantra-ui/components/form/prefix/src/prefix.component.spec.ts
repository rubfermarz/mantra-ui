/** @format */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixComponent } from './prefix.component';

describe('PrefixComponent', () => {
    let component: PrefixComponent;
    let fixture: ComponentFixture<PrefixComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PrefixComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PrefixComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
