import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentopeningsComponent } from './currentopenings.component';

describe('CurrentopeningsComponent', () => {
  let component: CurrentopeningsComponent;
  let fixture: ComponentFixture<CurrentopeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentopeningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentopeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
