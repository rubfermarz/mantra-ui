import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraButton } from './mantra-button.component';

describe('ButtonComponent', () => {
    let component: MantraButton;
    let fixture: ComponentFixture<MantraButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MantraButton],
        }).compileComponents();

        fixture = TestBed.createComponent(MantraButton);
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
