import { Component, OnInit } from '@angular/core';

interface list {
  icon: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.scss']
})
/**
 * Layout-2 services component
 */
export class Services2Component implements OnInit {

  constructor() { }

  heading: string = "Our Services";
  content: string = "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.";
  serviceList: list[] = [
    {
      icon: "alert-octagon",
      title: "Awesome Support",
      content: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform."
    },
    {
      icon: "droplet",
      title: "Dynamic Growth",
      content: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet."
    },
    {
      icon: "minimize",
      title: "Easy to Use",
      content: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    },
    {
      icon: "shield",
      title: "Branding Identity",
      content: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World."
    }
  ];

  ngOnInit(): void {
  }

}
