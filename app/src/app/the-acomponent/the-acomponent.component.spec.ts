import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAComponentComponent } from './the-acomponent.component';

describe('TheAComponentComponent', () => {
  let component: TheAComponentComponent;
  let fixture: ComponentFixture<TheAComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TheAComponentComponent]
    });
    fixture = TestBed.createComponent(TheAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
