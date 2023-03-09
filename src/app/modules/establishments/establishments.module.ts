import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { EstablishmentsRoutingModule } from './establishments-routing.module';

import { EstablishmentsComponent } from './establishments.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselPlacesComponent } from './components/carousel-places/carousel-places.component';
import { CarouselSlidesComponent } from './components/carousel-slides/carousel-slides.component';

@NgModule({
  declarations: [
    EstablishmentsComponent,
    HeaderComponent,
    CarouselSlidesComponent,
    CarouselPlacesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    EstablishmentsRoutingModule,
  ],
})
export class EstablishmentsModule {}
