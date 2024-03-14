import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGeneratedComponent } from './ng-generated.component';

describe('NgGeneratedComponent', () => {
  let component: NgGeneratedComponent;
  let fixture: ComponentFixture<NgGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgGeneratedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
