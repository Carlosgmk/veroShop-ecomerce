import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent  implements AfterViewInit {
  ngAfterViewInit(): void {
    this.makeEventsPassive();
  }

  makeEventsPassive() {
    document.querySelectorAll('.owl-carousel, .swiper-container').forEach((el) => {
      el.addEventListener('touchstart', () => {}, { passive: true });
      el.addEventListener('wheel', () => {}, { passive: true });
    });
  }


  slides = [
    { url: 'https://www.kacewear.com.br/cdn/shop/files/Camiseta_Redragon_Vermelha_Kace_Masculino_Principal.jpg?v=1722460332' },
    { url: 'https://www.kacewear.com.br/cdn/shop/files/Bone_Estonado_Rework_Cinza_Kace_Wear_Feminino_Lateral.png?v=1745791271' },
    { url: 'https://acdn-us.mitiendanube.com/stores/001/790/777/products/1-4a1c11a56106c34f4e17452894699890-640-0.webp' },
    { url: 'https://images.tcdn.com.br/img/img_prod/476013/camiseta_streetwear_prison_black_hype_logo_4519_2_a10b7d856e4fc2bd0e3f5949c72052ee.jpg' },
    { url: 'https://newskull.fbitsstatic.net/img/b/0f8acf75-4968-4237-9238-7e4ce351a589.png' },
    { url: 'https://br.puma.com/media/contentmanager/content/25SS_Ecom_BR_Brand-Campaign-Running_CLP_Full-Bleed-Hero_Large-Desk_1536x1536px_2_2.jpg' },
    
  ];

  trackById(index: number, slide: any): string {
    return `${index}-${slide.url}`;  // Aqui o index já é único, sem necessidade de usar ID
  }

  carouselOptions = {
    loop: true,  // Permite o loop das imagens
    autoplay: true,
    center: true,
    dots: false,  // Ativa os pontos de navegação
    nav: true,  // Desativa os controles de navegação (prev/next)
    items: 1,
    rtl: true,
    dotsData: true,  // Ativa a personalização dos pontos de navegação
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };
}
