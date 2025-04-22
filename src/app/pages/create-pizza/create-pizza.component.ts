import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderService } from '../../services/order.service';
import { UserService } from '../../services/user.service';

import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';
import { NavScreens } from '../create-screens/nav-screens/nav-screens.component';
import { PizzaScreen } from '../create-screens/pizza-screen/pizza-screen.component';
import { BeveragesScreen } from '../create-screens/beverages-screen/beverages-screen.component';
import { OrderScreen } from "../create-screens/order-screen/order-screen.component";

@Component({
    selector: 'app-create-pizza',
    standalone: true,
    imports: [CommonModule, NavigationBar, NavScreens,
        PizzaScreen, BeveragesScreen, OrderScreen
    ],
    templateUrl: './create-pizza.component.html'
})

export class CreatePizza {
    constructor(private orderServiceStore: OrderService, private userService: UserService) {
        document.title = "Group Five's Pizza Shop - Create Your Order";
        this.userService.promptLogin();

        this.orderServiceStore.createPageResizeEL();
        this.orderService = orderServiceStore;
    }

    orderService: OrderService;

    @HostListener("window:resize", ['$event'])
    onResize() {
        this.orderServiceStore.createPageResizeEL();
    }
}