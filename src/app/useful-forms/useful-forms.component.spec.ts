import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulFormsComponent } from './useful-forms.component';

describe('UsefulFormsComponent', () => {
  let component: UsefulFormsComponent;
  let fixture: ComponentFixture<UsefulFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsefulFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsefulFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
