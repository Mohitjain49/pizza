import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaAbout } from './pizza-about.component';

describe('PizzaAbout', () => {
    let component: PizzaAbout;
    let fixture: ComponentFixture<PizzaAbout>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PizzaAbout]
        })
        .compileComponents();

        fixture = TestBed.createComponent(PizzaAbout);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
