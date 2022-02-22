import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeWorkComponent } from './life-work.component';

describe('LifeWorkComponent', () => {
  let component: LifeWorkComponent;
  let fixture: ComponentFixture<LifeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
