import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-address-box',
    standalone: true,
    imports: [CommonModule, MatIconModule, FormsModule],
    templateUrl: './address-box.component.html'
})

export class AddressBox {
    constructor(private userServiceStore: UserService) {
        this.userService = userServiceStore;
    }

    userService: UserService
    boxOpen: boolean = false;
    @Input() payPage: boolean = false;

    /**
     * This toggles whether or not the box is open or not.
     */
    setBox() {
        this.boxOpen = !this.boxOpen;
    }
}
