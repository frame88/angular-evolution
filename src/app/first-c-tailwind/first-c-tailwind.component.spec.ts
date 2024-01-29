import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCTailwindComponent } from './first-c-tailwind.component';

describe('FirstCTailwindComponent', () => {
  let component: FirstCTailwindComponent;
  let fixture: ComponentFixture<FirstCTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FirstCTailwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
