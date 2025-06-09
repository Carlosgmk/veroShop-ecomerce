import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-itens',
  standalone: false,
  templateUrl: './popular-itens.component.html',
  styleUrl: './popular-itens.component.scss'
})
export class PopularItensComponent {
  popularItems = [

  {
    name: 'BLAZER SHUI OVERSIZED ALFAIATARIA TRIAD',
    description: 'Short description',
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/790/777/products/dsc00330-f91cb017056b9d660a17452821793735-320-0.webp'
  },
  {
    name: 'Blusão Nike Soft Knit 24.7 Feminino',
    description: 'Short description',
    imageUrl: 'https://imgnike-a.akamaihd.net/03003351.jpg'
  },
      {
    name: 'Mochila DC Shoes Breed 5 Black/Black',
    description: 'Short description',
    imageUrl: 'https://dcshoes.vtexassets.com/arquivos/ids/296394-500-auto?v=638784190572130000&width=500&height=auto&aspect=true'
  },

  {
    name: 'CAMISA SHUI BOX CARGO SARJA STAR SS25',
    description: 'Short description',
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/001/790/777/products/sem-titulo-94-51e063cfa9be35cb4017455480396178-240-0.webp'
  },

    {
    name: 'Item 4',
    description: 'Top Nike Indy Feminino',
    imageUrl: 'https://imgnike-a.akamaihd.net/028834A3.jpg'
  },
  {
    name: 'Item 6',
    description: 'Blusão Nike Club Crew Masculino',
    imageUrl: 'https://imgnike-a.akamaihd.net/1920x1920/058563NX.jpg'
  },
  {
    name: 'Item 6',
    description: 'Meias Cushioned Sportswear Crew 6 Pares',
    imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/cb3f79f599ea4bcda0a8af27009eeacc_9366/Meias_Cushioned_Sportswear_Crew_6_Pares_Preto_IC1316_00_plp_standard.jpg'
  },
  // ...até 6
];

}

 //acdn-us.mitiendanube.com/stores/001/790/777/products/dsc00330-f91cb017056b9d660a17452821793735-480-0.webp 480w, //acdn-us.mitiendanube.com/stores/001/790/777/products/dsc00330-f91cb017056b9d660a17452821793735-640-0.webp 640w, //acdn-us.mitiendanube.com/stores/001/790/777/products/dsc00330-f91cb017056b9d660a17452821793735-1024-1024.webp 1024w