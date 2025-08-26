import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pizza } from '../../../models/pizzas/pizza.model';
import { PizzaService } from '../../../services/pizza.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  pizzas: Pizza[] = [];
  selectedPizza: Pizza | null = null;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzas = data;
    });
  }

  openLightbox(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  closeLightbox() {
    this.selectedPizza = null;
  }

}
