import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPay } from './pizza-pay.component';

describe('PizzaPay', () => {
    let component: PizzaPay;
    let fixture: ComponentFixture<PizzaPay>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PizzaPay]
        })
        .compileComponents();

        fixture = TestBed.createComponent(PizzaPay);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
