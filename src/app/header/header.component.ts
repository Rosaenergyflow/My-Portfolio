import { HostListener, Component, OnInit } from '@angular/core';
import {trigger,transition, animate, style} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  animations: [
    trigger('titleAnimation',[
      transition(':enter', [
        style({ opacity: 0,transform: 'translateX(-150px)'}),
        animate('0s 2s', style({ opacity: 1,transform: 'translateX(0px)'})),
      ]),
    ]),

    trigger('subtitleAnimation',[
      transition(':enter', [
        style({ opacity: 0,transform: 'translateX(10%) scale(5)'}),
        animate('3s 1s', style({ opacity: 1,transform: 'translateX(0%) scale(1)'})),
      ]),
    ]),
  ]
})



export class HeaderComponent implements OnInit {
  constructor() { }
  title = "I'm Rosa";
  subtitle = "and I'm Frontend Developer";
  scrollPosition:number = 0;
  burguerOpen:boolean=false;

  ngOnInit(): void {
  }

  displayNav(){
    this.burguerOpen = !this.burguerOpen;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(this.scrollPosition==0){
      this.burguerOpen=false;
    }
  }

  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
      if(!element.classList.contains('botonBurguer')) {
        this.burguerOpen=false;
      }
  }

}