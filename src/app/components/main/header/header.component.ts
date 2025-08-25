import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuItems: MenuItem[] = [
    { title: 'Пиццы', link: '#pizzas' },
    { title: 'Напитки', link: '#drinks' },
    { title: 'Доставка и оплата', link: '#delivery' },
    { title: 'Контакты', link: '#contacts' }
  ];

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
