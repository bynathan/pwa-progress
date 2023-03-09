import { AfterContentInit, Component, OnInit } from '@angular/core';
import { EstablishmentsService } from 'src/app/core/services/establishments.service';

import { EstablishmentsModel } from './models/establishments.model';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss'],
})
export class EstablishmentsComponent implements OnInit {
  cityId: number = 4; // Canindé - CE

  marketsList: EstablishmentsModel[] = [];
  restaurantsList: EstablishmentsModel[] = [];
  petShopsList: EstablishmentsModel[] = [];
  drinksShopsList: EstablishmentsModel[] = [];

  constructor(private establishmentsService: EstablishmentsService) {}

  ngOnInit(): void {
    // this.getMarkets();
    this.getRestaurants();
    // this.getPetShops();
    // this.getDrinksShops();
  }

  backToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  getMarkets() {}

  getRestaurants() {
    this.establishmentsService
      .getEstablishments(this.cityId)
      .subscribe((data) => {
        const allPlaces: EstablishmentsModel[] = data.payload.payload;
        this.restaurantsList = allPlaces.filter(
          (place) => place.businessType.id === 1
        );
      });
  }

  getPetShops() {}

  getDrinksShops() {}
}
