import { Component } from '@angular/core';

@Component({
  selector: 'app-main-visual',
  standalone: false,
  templateUrl: './main-visual.component.html',
  styleUrl: './main-visual.component.scss',
})
export class MainVisualComponent {
  slides = [
    {
      url: '//yourid.jetassets.com.br/banner/1748111465430-017419051934651764.jpeg?ims=fit-in/320x/filters:quality(100):format(webp)',
      text: 'ON X PLEASURES',
      link: '/',
    },
    {
      url: '//yourid.jetassets.com.br/banner/1748111518491-09495651625000019.jpeg?ims=fit-in/320x/filters:quality(100):format(webp)',
      text: 'NEW BALANCE "GREY DAYS 2025',
      link: '/',
    },
  ];

  trackById(index: number, slide: any): string {
    return `${index}-${slide.url}`; // Aqui o index já é único, sem necessidade de usar ID
  }

  carouselOptions = {
    loop: false, // Permite o loop das imagens
    autoplay: false,
    center: false,
    dots: true, // Ativa os pontos de navegação
    nav: false, // Desativa os controles de navegação (prev/next)
    rtl: true,
    dotsData: true, // Ativa a personalização dos pontos de navegação
    responsive: {
      0: { items: 1 },
      1000: { items: 2 },
    },
  };
}
