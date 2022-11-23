import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { LayoutTwo3Component } from './layout-two3/layout-two3.component';

@NgModule({
  declarations: [
    LayoutTwo3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    CarouselModule,
    NgbAccordionModule,
    NgxYoutubePlayerModule
  ]
})
export class PagesModule { }
