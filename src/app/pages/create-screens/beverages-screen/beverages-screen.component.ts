import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { OrderService } from '@/services/order.service';

@Component({
    selector: 'beverages-screen',
    standalone: true,
    imports: [CommonModule, FormsModule,
        MatIconModule, MatRadioModule,
        MatCheckboxModule, MatButtonModule
    ],
    templateUrl: './beverages-screen.component.html'
})

export class BeveragesScreen {
    constructor(private orderServiceStore: OrderService) {
        this.orderService = orderServiceStore;
    }

    orderService: OrderService;
    sizeOpen: boolean = true;
    drinkOpen: boolean = true;

    /**
     * This toggles whether the pizza size tab is open or not.
     */
    toggleSizeOpen() {
        this.sizeOpen = !this.sizeOpen;
    }

    /**
     * This toggles whether the pizza crusts tab is open or not.
     */
    toggleDrinkOpen() {
        this.drinkOpen = !this.drinkOpen;
    }
}