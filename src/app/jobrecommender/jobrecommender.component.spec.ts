import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobrecommenderComponent } from './jobrecommender.component';

describe('JobrecommenderComponent', () => {
  let component: JobrecommenderComponent;
  let fixture: ComponentFixture<JobrecommenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobrecommenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobrecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
