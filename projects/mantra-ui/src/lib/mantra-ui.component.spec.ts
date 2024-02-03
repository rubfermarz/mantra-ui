import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraUiComponent } from './mantra-ui.component';

describe(`MantraUiComponent`, () => {
  let component: MantraUiComponent;
  let fixture: ComponentFixture<MantraUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantraUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MantraUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
