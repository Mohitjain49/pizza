import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { OrderService } from '@/services/order.service';

@Component({
    selector: 'nav-screens',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './nav-screens.component.html',
})

export class NavScreens {
    constructor(private orderServiceStore: OrderService) {}

    /**
     * Calls the "setCreateScreenIndex" function in the user service.
     */
    setScreen(index: number = 0) {
        this.orderServiceStore.setCreateScreenIndex(index);
    }
}
