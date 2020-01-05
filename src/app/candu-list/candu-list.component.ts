import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import candidate from '../../assets/candidate.json';

@Component({
  selector: 'app-candu-list',
  templateUrl: './candu-list.component.html',
  styleUrls: ['./candu-list.component.scss']
})
export class CanduListComponent implements OnInit {

  cad_list: any = []

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.cad_list = candidate
  }

  viewProfile (e) {
    localStorage.setItem('candy_data', JSON.stringify(e))
    this.route.navigate(['/profile'])
  }

}
