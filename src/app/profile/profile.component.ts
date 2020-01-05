import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  can = ''

  constructor() { }

  ngOnInit() {
    this.can = JSON.parse(localStorage.getItem('candy_data'))
    console.log(this.can)
  }

}
