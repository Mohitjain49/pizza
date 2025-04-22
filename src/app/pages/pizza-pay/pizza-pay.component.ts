import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio'

import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';
import { AddressBox } from '../../components/address-box/address-box.component';
import { ChargeBox } from '../../components/charge-box/charge-box.component';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-pizza-pay',
    standalone: true,
    imports: [CommonModule, NavigationBar, AddressBox, ChargeBox,
        MatIconModule, RouterLink, RouterLinkActive,
        MatRadioModule, MatDatepickerModule, MatNativeDateModule,
        MatFormFieldModule, MatInputModule
    ],
    templateUrl: './pizza-pay.component.html'
})

export class PizzaPay {
    constructor(private userServiceStore: UserService) {
        document.title = "Group Five's Pizza Shop - Pay";
        this.userServiceStore.promptLogin();

        this.minDate = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.minDate.getDate() + 5);

        this.userStore = userServiceStore;
        this.totalCost = userServiceStore.getTotalPrice();
    }

    picker: any = 0;
    minDate: Date;
    maxDate: Date;

    userStore: UserService;
    totalCost: any;
}