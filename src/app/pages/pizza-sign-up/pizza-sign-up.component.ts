import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { UserService } from '../../services/user.service';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';
import { AddressBox } from '../../components/address-box/address-box.component';
import { ChargeBox } from '../../components/charge-box/charge-box.component';

@Component({
    selector: 'app-pizza-sign-up',
    standalone: true,
    imports: [NavigationBar, AddressBox, ChargeBox,
        CommonModule, FormsModule,
        MatIconModule, RouterLink, RouterLinkActive
    ],
    templateUrl: './pizza-sign-up.component.html'
})

export class PizzaSignUp {
    constructor(private userServiceStore: UserService) {
        document.title = "Group Five's Pizza Shop - Sign Up";
        this.userServiceStore.setAuthError();
        this.userServiceStore.promptHome();
        this.userService = userServiceStore;
    }

    name: string = "";
    phoneNum: string = "";
    password: string = "";
    confirmPassword: string = "";

    userService: UserService

    /**
     * This calls the sign up function in the user service should the user have entered valid info.
     */
    signUpUser() {
        if(this.name === "" || this.phoneNum === "" || this.password === "") {
            this.userServiceStore.setAuthError("The Name, Phone Number, or Password field is not filled out.");
        } else if(this.phoneNum.match(/\d{10}/g) === null) {
            this.userServiceStore.setAuthError("Invalid Phone Number Format");
        } else if(this.password !== this.confirmPassword) {
            this.userServiceStore.setAuthError("Password Not Confirmed.");
        } else {
            this.userServiceStore.signUpUser(this.name, ("+1" + this.phoneNum), this.password);
        }
    }
}
