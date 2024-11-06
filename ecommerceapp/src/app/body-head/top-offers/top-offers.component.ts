import { Component } from '@angular/core';

@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.css']
})
export class TopOffersComponent {
  offers = [
    { title: '50% Off on Electronics', description: 'Huge discount on all electronics items this weekend.' },
    { title: 'Up to 70% Off on Fashion', description: 'Exclusive deals on fashion items for a limited time.' },
    { title: 'Buy 1 Get 1 Free on Shoes', description: 'Get your favorite pair of shoes with an amazing offer.' },
    { title: 'Extra 30% Off on Groceries', description: 'Save more when you shop for groceries today.' },
    // Add more offers here
  ];
}
