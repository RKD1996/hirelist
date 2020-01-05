import { Component, OnInit, HostListener, AfterViewChecked } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'hirelist';

  constructor() { console.log('constructor') }

  openList() {
    let cover = document.getElementById('nav-cover');
    console.log(cover);
    cover.style.top = '-1500px';
  }

  ngOnInit() {
    console.log('onInit')
    // window.scrollTo({top: localStorage.getItem('scrollVal')})
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked')
    window.scrollTo({top: parseInt(localStorage.getItem('scrollVal'))})
  }
}
