import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface content {
  name: string;
  sub_title: string;
  content: string;
  image: string;
  starRating: any;
}

@Component({
  selector: 'app-client2',
  templateUrl: './client2.component.html',
  styleUrls: ['./client2.component.scss']
})
/**
 * Layout-2 client component
 */
export class Client2Component implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  }

  heading: string = 'Qui somme nous ?';
  content: string = '';
  contentData: content[] = [
    {
      name: 'Jordan Dakin',
      sub_title: 'Web Designer',
      content: "Madame Blanchard, experte dans le recouvrement amiable depuis plusieurs années, jai travaillé pour différentes sociétés ( banque, petits artisans, société de leasing, ....) où j'ai pu acquérir toutes les qualités nécessaires d'un agent de recouvrement. J'ai su réunir une équipe d'experts afin de pouvoir satisfaire ma clientèle",
      image: 'assets/layout/images/user-1.png',
      starRating: 4
    },
    {
      name: 'Jordan Dakin',
      sub_title: 'Web Designer',
      content: "Faire appel à notre Cabinet c'est vous assurez que vos dettes seront recouvrées sans que votre image n'en soit impactée.",
      image: 'assets/layout/images/user-2.png',
      starRating: 5
    },
  
  ];

  ngOnInit(): void {
  }

}
