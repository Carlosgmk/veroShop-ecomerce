import { Component } from '@angular/core';

@Component({
  selector: 'app-deal-spot',
  standalone: false,
  templateUrl: './deal-spot.component.html',
  styleUrl: './deal-spot.component.scss'
})
export class DealSpotComponent {
  deals = [
    {img: 'https://quiksilver.vtexassets.com/assets/vtex/assets-builder/quiksilver.store-theme/4.0.18/imgs/home/benefits/benefit-gift___e87029c2600bf02fd5876bde82cf017a.svg', title: '10% OFF na 1ª compra', desc: 'Cadastre-se à Newsletter'},
    {img: 'https://quiksilver.vtexassets.com/assets/vtex/assets-builder/quiksilver.store-theme/4.0.18/imgs/home/benefits/benefit-card___6fbae8f81f2f8469bb48b2602c187194.svg', title: 'Até 10x sem juros', desc: 'Parcele em até 10x sem juros'},
    {img: 'https://quiksilver.vtexassets.com/assets/vtex/assets-builder/quiksilver.store-theme/4.0.18/imgs/home/benefits/benefit-store___c104f456f515498b897714f3cb0bb8b2.svg', title: 'Compra Segura e Garantida', desc: 'Produtos originais e atendimento premium!'},
    {img: 'https://quiksilver.vtexassets.com/assets/vtex/assets-builder/quiksilver.store-theme/4.0.18/imgs/home/benefits/benefit-shipping___21c5c366c20c1d7e9042ebbf21df59d2.svg', title: 'Ganhe Entrega Grátis', desc: 'Frete grátis acima de R$ 199,90'},
   
  ]

    carouselOptions = {
    items: 1, // Quantos itens por vez
    loop: false, // Habilita o loop
    margin: 20, // Espaçamento entre os itens
    nav: false, // Habilita a navegação
    autoplay: false, // Habilita o autoplay
    autoplayTimeout: 3000, // Intervalo do autoplay
    dots: false,
    navText: [
      '<img src="assets/images/seta-esquerda.png" alt="Anterior">',
      '<img src="assets/images/seta-direita.png" alt="Anterior">'
    ],
    autoplayHoverPause: true, // Pausa o autoplay quando passa o mouse
      responsive: {
    0: { items: 1 },
    600: { items: 2 },
    // 600: { items: 3 },
    1000: { items: 3 },
    1300: { items: 4 } // você pode ajustar isso também
  }
  };
}
