import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanywebsiteComponent } from './companywebsite.component';

describe('CompanywebsiteComponent', () => {
  let component: CompanywebsiteComponent;
  let fixture: ComponentFixture<CompanywebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanywebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanywebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
