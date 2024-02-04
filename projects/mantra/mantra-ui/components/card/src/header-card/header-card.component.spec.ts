/** @format */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCardComponent } from './header-card.component';

describe('MantraHeaderCardComponent', () => {
    let component: HeaderCardComponent;
    let fixture: ComponentFixture<HeaderCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
