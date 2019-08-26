import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmantFormComponent } from './departmant-form.component';

describe('DepartmantFormComponent', () => {
  let component: DepartmantFormComponent;
  let fixture: ComponentFixture<DepartmantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
