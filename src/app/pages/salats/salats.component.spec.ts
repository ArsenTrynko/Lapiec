import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatsComponent } from './salats.component';

describe('SalatsComponent', () => {
  let component: SalatsComponent;
  let fixture: ComponentFixture<SalatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
