import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isUserMenuOpen = false;

  openUserMenu() {
    this.isUserMenuOpen = true;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }
  
}
