import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { UserService } from '../../services/user.service';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';

@Component({
    selector: 'app-pizza-login',
    standalone: true,
    imports: [NavigationBar, CommonModule, FormsModule, MatIconModule, RouterLink, RouterLinkActive],
    templateUrl: './pizza-login.component.html'
})

export class PizzaLogin {
    constructor(private userServiceStore: UserService) {
        document.title = "Group Five's Pizza Shop - Log In";
        this.userServiceStore.promptHome();
        this.userService = userServiceStore;
    }

    @HostListener('document:keydown', ['$event'])
    pressEnter(event: KeyboardEvent) {
        if(event.key === "Enter") { this.loginUser(); }
    }

    userService: UserService;
    phoneNum: string = "";
    password: string = "";

    /**
     * This function calls the login user function in the user service.
     */
    loginUser() {
        if(this.phoneNum === "" || this.password === "") {
            this.userServiceStore.setAuthError("The Phone Number or Password field is not filled out.");
        } else if(this.phoneNum.match(/\d{10}/g) === null) {
            this.userServiceStore.setAuthError("Invalid Phone Number Format");
        } else {
            this.userServiceStore.loginUser(("+1" + this.phoneNum), this.password);
        }
    }
}
