import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCComponentComponent } from './the-ccomponent.component';

describe('TheCComponentComponent', () => {
  let component: TheCComponentComponent;
  let fixture: ComponentFixture<TheCComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TheCComponentComponent]
    });
    fixture = TestBed.createComponent(TheCComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
