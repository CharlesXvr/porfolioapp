import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserInfoComponentComponent } from './edit-user-info-component.component';

describe('EditUserInfoComponentComponent', () => {
  let component: EditUserInfoComponentComponent;
  let fixture: ComponentFixture<EditUserInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
