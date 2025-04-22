import { Component } from '@angular/core';

import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';

@Component({
    selector: 'app-pizza-about',
    standalone: true,
    imports: [NavigationBar],
    templateUrl: './pizza-about.component.html'
})

export class PizzaAbout {
    constructor() {
        document.title = "Group Five's Pizza Shop - About Us";
    }
}