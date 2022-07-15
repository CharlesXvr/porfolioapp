import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserEducationComponentComponent } from './edit-user-education-component.component';

describe('EditUserEducationComponentComponent', () => {
  let component: EditUserEducationComponentComponent;
  let fixture: ComponentFixture<EditUserEducationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserEducationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserEducationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
