import { Component, Input, OnInit } from '@angular/core';

import { EstablishmentsModel } from '../../models/establishments.model';

@Component({
  selector: 'app-carousel-places',
  templateUrl: './carousel-places.component.html',
  styleUrls: ['./carousel-places.component.scss'],
})
export class CarouselPlacesComponent implements OnInit {
  itemsPerSlideItens = 4;
  singleSlideOffsetItens = true;
  noWrapItens = false;

  deliveryNotFree = 'color: #292f31 !important; font-weight: 400 !important;';

  constructor() {}

  @Input() title: string = '';
  @Input() places: EstablishmentsModel[] = [];

  ngOnInit() {}
}
