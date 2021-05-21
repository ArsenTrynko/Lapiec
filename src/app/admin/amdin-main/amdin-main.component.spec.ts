import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdinMainComponent } from './amdin-main.component';

describe('AmdinMainComponent', () => {
  let component: AmdinMainComponent;
  let fixture: ComponentFixture<AmdinMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdinMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdinMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
