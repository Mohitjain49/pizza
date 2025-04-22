import { Component, OnDestroy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatIconModule } from "@angular/material/icon";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
    templateUrl: './navigation-bar.component.html',
    animations: [
        trigger('openClose', [
            state('open', style({
                width: '250px',
                fontSize: '18px'
            })),
            state('closed', style({
                width: '50px',
                fontSize: '1px'
            })),
            transition('open => closed', [
                animate('0.25s')
            ]),
            transition('closed => open', [
                animate('0.25s')
            ]),
        ])
    ]
})

export class NavigationBar implements OnDestroy {
    constructor(private userServiceStore: UserService, private location: Location) {
        this.userServiceStore.menuExpanded = false;
    }

    ngOnDestroy(): void {
        document.body.style.overflowX = ((window.innerWidth > 575) ? 'hidden' : 'auto');
        document.body.style.overflowY = "auto";
    }

    GITHUB_LINK: string = "https://github.com/Mohitjain49/pizza";
    menuExpanded: boolean = false;
    myEmail: string = "mailto:mohitkjain49@gmail.com";
    expandedStr: string = "closed";
    expandTitle: string = "Expand Menu";

    /**
     * This toggles the status of if the menu is expanded or not.
     */
    toggleMenuExpanded() {
        this.userServiceStore.togglePizzaMenu();
        this.menuExpanded = this.userServiceStore.menuExpanded;

        this.expandTitle = (this.menuExpanded ? 'Shrink Menu' : 'Expand Menu');
        this.expandedStr = (this.menuExpanded ? 'open' : 'closed');

        if(this.menuExpanded) {
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowX = ((window.innerWidth > 575) ? 'hidden' : 'auto');
            document.body.style.overflowY = "auto";
        }
    }

    /**
     * This function navigates the user to the previous page they were on.
     */
    goBack() {
        this.location.back();
    }
}
