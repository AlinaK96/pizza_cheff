import { Component } from '@angular/core';
import { HeaderComponent } from "./components/main/header/header.component";
import { HeroComponent } from "./components/sections/hero/hero.component";
import { MenuComponent } from "./components/sections/menu/menu.component";
import { OrderComponent } from "./components/sections/order/order.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, MenuComponent, OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
