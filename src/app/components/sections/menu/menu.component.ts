import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Pizza {
  id: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  pizzas: Pizza[] = [
    { id: 1, name: 'Мясная Делюкс', description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы', image: '/images/menu/1.png' },
    { id: 2, name: 'Морская Премиум', description: 'Перец, сыр, креветки, кальмары, мидии, лосось', image: '/images/menu/2.png' },
    { id: 3, name: 'Бекон и Сосиски', description: 'Бекон, сыр, сосиски, ананас, томатная паста', image: '/images/menu/3.png' },
    { id: 4, name: 'Куриная Делюкс', description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста', image: '/images/menu/4.png' },
    { id: 5, name: 'Барбекю Премиум', description: 'Свинина BBQ, соус Барбекю, сыр, курица, соус для пиццы, соус чили', image: '/images/menu/5.png' },
    { id: 6, name: 'Пепперони Дабл', description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная', image: '/images/menu/6.png' },
    { id: 7, name: 'Куриное трио', description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы', image: '/images/menu/7.png' },
    { id: 8, name: 'Сырная', description: 'Сыр Дорблю, Сыр с плесенью, Сыр Моцарелла, Сыр секретный', image: '/images/menu/8.png' },
  ];

  selectedPizza: Pizza | null = null;


  openLightbox(pizza: Pizza) {
    this.selectedPizza = pizza;
  }

  closeLightbox() {
    this.selectedPizza = null;
  }

}
