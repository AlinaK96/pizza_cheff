import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface HeroFeature {
  icon: string;
  alt: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  features: HeroFeature[] = [
    {
      icon: '/images/icons/hop.svg',
      alt: 'Лучшее тесто',
      title: 'Лучшее тесто',
      text: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества',
    },
    {
      icon: '/images/icons/kitchen-pack.svg',
      alt: 'Лучшие повара',
      title: 'Лучшие повара',
      text: 'Пиццы готовят самые профессиональные итальянские повара',
    },
    {
      icon: '/images/icons/seo-and-web.svg',
      alt: 'Гарантия качества',
      title: 'Гарантия качества',
      text: 'Наша пиццерия получила множество наград и признаний по всему миру',
    },
    {
      icon: '/images/icons/holidays.svg',
      alt: 'Отборные рецепты',
      title: 'Отборные рецепты',
      text: 'Мы используем рецепты от мировых лидеров в изготовлении пиццы',
    }
  ];

}
