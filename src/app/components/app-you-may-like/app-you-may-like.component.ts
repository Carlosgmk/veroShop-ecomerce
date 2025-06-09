import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-you-may-like',
  standalone: false,
  templateUrl: './app-you-may-like.component.html',
  styleUrl: './app-you-may-like.component.scss'
})
export class AppYouMayLikeComponent implements OnInit {
   isMobile = false;

    mayLikeimg = [
     
      {
        primaryImg:  'https://www.kacewear.com.br/cdn/shop/files/Camiseta_Oversized_Box_Lisa_Preta_Frente_Masculina.png?v=1690840221',

        hoverImg: 'https://www.kacewear.com.br/cdn/shop/files/Camiseta_Oversized_Box_Lisa_Preta_Costas_Masculina.png?v=1690840221'
      },
         {
        primaryImg:  'https://images.ctfassets.net/hnk2vsx53n6l/27AW0D8J7fZdZK6J7Bx6lv/09e662bac3fb6b28d44b8ee6f9ef753e/fw23-cyclon_Featured_Cards-1540x2180-02.jpg?w=900&h=1200&fm=jpg&fl=progressive&f=center&fit=fill&q=80',

        hoverImg: 'https://umbro.vtexassets.com/arquivos/ids/457380/U12TW073_222.jpg?v=638222630815770000'
      },

  
      
      {
        primaryImg: 'https://imgnike-a.akamaihd.net/1920x1920/0289047TA7.jpg',

        hoverImg: 'https://imgnike-a.akamaihd.net/768x768/0289047TA1.jpg',

      },

          {
        primaryImg: 'https://newbrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/5b189f72-fcb1-4392-9640-eec710e4474f___07e6520c5679f41bcd56304ec24faf20.png',

        hoverImg: 'https://newbrasil.vtexassets.com/arquivos/ids/173788/WP41573B_LMR.jpg?v=638785046402130000',

      },
      
      {
        primaryImg: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe42b0481ed24ef1b3ba41b7a52fac50_9366/regata-own-the-run-climacool-tres-listras.jpg',

        hoverImg: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f293158552e44cbda074ff4f972904d0_9366/regata-own-the-run-climacool-tres-listras.jpg'

      },

      

   


     

     

      

     
    ]

      carouselOptions = {
    items: 1, // Quantos itens por vez
    loop: false, // Habilita o loop
    margin: 20, // Espaçamento entre os itens
    nav: true, // Habilita a navegação
    autoplay: false, // Habilita o autoplay
    autoplayTimeout: 3000, // Intervalo do autoplay
    navText: [
      '<img src="assets/images/seta-esquerda.png" alt="Anterior">',
      '<img src="assets/images/seta-direita.png" alt="Anterior">'
    ],
    autoplayHoverPause: true, // Pausa o autoplay quando passa o mouse
      responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    1138: { items: 3 }, 
    1280: { items: 4 } // você pode ajustar isso também
  }
  };

  ngOnInit() {
  this.checkViewport();
  window.addEventListener('resize', () => this.checkViewport());
  }

checkViewport() {
  this.isMobile = window.innerWidth < 1000;
}
}
