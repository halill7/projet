import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBComponentComponent } from './the-bcomponent.component';

describe('TheBComponentComponent', () => {
  let component: TheBComponentComponent;
  let fixture: ComponentFixture<TheBComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TheBComponentComponent]
    });
    fixture = TestBed.createComponent(TheBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
