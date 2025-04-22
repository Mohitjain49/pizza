import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaLogout } from './pizza-logout.component';

describe('PizzaLogout', () => {
  let component: PizzaLogout;
  let fixture: ComponentFixture<PizzaLogout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaLogout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaLogout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
