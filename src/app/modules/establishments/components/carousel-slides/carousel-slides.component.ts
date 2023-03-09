import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slides',
  templateUrl: './carousel-slides.component.html',
  styleUrls: ['./carousel-slides.component.scss'],
})
export class CarouselSlidesComponent implements OnInit {
  itemsPerSlideSwiper = 3;
  singleSlideOffsetSwiper = true;
  noWrapSwiper = false;

  // Mockado, ver com Sérgio quais vão ser esses banners :)
  slides = [
    { image: '../../../../../assets/imgs/home/gray-square.png' },
    { image: '../../../../../assets/imgs/home/gray-square.png' },
    { image: '../../../../../assets/imgs/home/gray-square.png' },
    { image: '../../../../../assets/imgs/home/gray-square.png' },
    { image: '../../../../../assets/imgs/home/gray-square.png' },
    { image: '../../../../../assets/imgs/home/gray-square.png' },
  ];

  constructor() {}

  ngOnInit() {}
}
