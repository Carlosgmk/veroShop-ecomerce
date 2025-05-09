import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-item',
  standalone: false,
  templateUrl: './app-featured-item.component.html',
  styleUrl: './app-featured-item.component.scss'
})
export class AppFeaturedItemComponent {
  @Input() imgSrc!: string; // Caminho da imagem
  @Input() imgAlt: string = 'Imagem do produto'; // Descrição da imagem
  @Input() btn1Label!: string; // Texto do primeiro link
  @Input() btn1Href!: string; // URL do primeiro link
  @Input() btn2Label?: string; // Texto opcional do segundo link
  @Input() btn2Href?: string; // URL opcional do segundo link
}
