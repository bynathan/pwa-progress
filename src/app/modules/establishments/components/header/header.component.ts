import { Component, Input, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterContentInit  {
  constructor() {}

  @Input() searchPlaceholder: string = 'Buscar produto, loja ou categoria';

  ngOnInit() {}

  public headerClass: boolean = false;

  ngAfterContentInit(){
    this.classHeader();
  }

  classHeader(){
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1.5) {
        this.headerClass = true;
      }else {
        this.headerClass = false;
      }
    });
  }   

  public focusOn: boolean = false;

  focusOnClass(){
    if(this.focusOn == false){
      this.focusOn = true;
    }else{
      this.focusOn = false;
    }
  }
}
