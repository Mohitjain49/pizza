import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaLogin } from './pizza-login.component';

describe('PizzaLogin', () => {
    let component: PizzaLogin;
    let fixture: ComponentFixture<PizzaLogin>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PizzaLogin]
        })
        .compileComponents();

        fixture = TestBed.createComponent(PizzaLogin);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
