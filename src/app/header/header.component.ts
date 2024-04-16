import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  activateNavItem() {
    if (!this.menuOpen) {
      this.menuOpen = true;
    }
  }

  deactivateNavItem() {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
