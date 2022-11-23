import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
/**
 * Layout-1 contact component
 */
export class ContactComponent implements OnInit {

  // Form submition
  submit?: boolean;

  constructor() { }

  heading: string = "Contactez nous";
  

  ngOnInit(): void {   
  } 

}
