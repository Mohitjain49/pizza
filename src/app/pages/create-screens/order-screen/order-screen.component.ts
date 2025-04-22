import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTable } from '@angular/material/table';

import { OrderService, Drink, Pizza } from '@/services/order.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'order-screen',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, MatTableModule, MatIconModule],
    templateUrl: './order-screen.component.html'
})

export class OrderScreen implements OnDestroy, AfterViewInit {
    @ViewChild('pizzaTable') pizzaTable: MatTable<any> | undefined;
    @ViewChild('drinkTable') drinkTable: MatTable<any> | undefined;

    constructor(private orderServiceStore: OrderService) {
        this.orderService = orderServiceStore;
    }

    ngAfterViewInit(): void {
        this.drinksSubscription = this.orderServiceStore.drink$.subscribe((updatedData) => {
            this.drinksData = updatedData;
            if(this.drinkTable != undefined) { this.drinkTable.renderRows(); }
        })
        this.pizzasSubscription = this.orderServiceStore.pizza$.subscribe((updatedData) => {
            this.pizzasData = updatedData;
            if(this.pizzaTable != undefined) { this.pizzaTable.renderRows(); }
        })
    }

    ngOnDestroy(): void {
        if(this.drinksSubscription) { this.drinksSubscription.unsubscribe(); }
        if(this.pizzasSubscription) { this.pizzasSubscription.unsubscribe(); }
    }

    private drinksSubscription: Subscription | undefined;
    private pizzasSubscription: Subscription | undefined;

    orderService: OrderService;
    drinksData: Array<Drink> = [];
    pizzasData: Array<Pizza> = [];

    drinkColumnsToDisplay = ['beverage', 'size', 'quantity', 'priceStr'];
    pizzaColumnsToDisplay = ['size', 'crust', 'toppings', 'quantity', 'priceStr'];

    /**
     * Calls the "setCreateScreenIndex" function in the user service.
     */
    setScreen(index: number = 0) {
        this.orderServiceStore.setCreateScreenIndex(index);
    }
}