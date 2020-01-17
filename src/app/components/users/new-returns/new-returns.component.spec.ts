import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReturnsComponent } from './new-returns.component';

describe('NewReturnsComponent', () => {
  let component: NewReturnsComponent;
  let fixture: ComponentFixture<NewReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
