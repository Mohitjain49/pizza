import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSignUp } from './pizza-sign-up.component';

describe('PizzaSignUp', () => {
    let component: PizzaSignUp;
    let fixture: ComponentFixture<PizzaSignUp>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PizzaSignUp]
        })
        .compileComponents();

        fixture = TestBed.createComponent(PizzaSignUp);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
