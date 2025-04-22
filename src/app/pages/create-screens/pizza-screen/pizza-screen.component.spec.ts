import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaScreen } from './pizza-screen.component';

describe('PizzaScreen', () => {
  let component: PizzaScreen;
  let fixture: ComponentFixture<PizzaScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
