import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface content {
  title: string;
  sub_title: string;
  content: string;
  icon: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
/**
 * Layout-1 client component
 */
export class ClientComponent implements OnInit {

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
        items: 2
      }
    },
    nav: false
  }

  heading: string = 'What Client Says';
  content: string = "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar metus molestie sed Semikoli.";
  contentData: content[] = [
    {
      title: 'Jordan Dakin',
      sub_title: 'Web Designer',
      content: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.",
      icon: 'message-circle',
    },
    {
      title: 'Ebony Downe',
      sub_title: 'CEO, Founder',
      content: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.",
      icon: 'message-circle',
    },
    {
      title: 'Sophie Gant',
      sub_title: 'Web Designer',
      content: "I've learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.",
      icon: 'message-circle',
    },
    {
      title: 'Ruben reed',
      sub_title: 'Web Designer',
      content: "Those must scelerisque pretium dolor, sit amet vehicula be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sitamet semper justo. nature and its beauty.",
      icon: 'message-circle',
    },
    {
      title: 'Eva Pearce',
      sub_title: 'PHP Developer',
      content: "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sit amet semper justo. nature and its beauty.",
      icon: 'message-circle',
    }
  ];

  ngOnInit(): void {
  }

}
