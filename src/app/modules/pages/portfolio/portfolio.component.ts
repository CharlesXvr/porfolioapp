import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  number:number= 50;
  constructor() { }

  ngOnInit(): void {
  }

  saleData = [
    { name: "Mobiles", value: 50 },

  ];

}
