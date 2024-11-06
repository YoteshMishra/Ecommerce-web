import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId!: string;
  orderDate: string = '2023-10-01'; // Example data
  orderStatus: string = 'Shipped';   // Example data
  orderTotal: number = 29.99;        // Example data
  orderItems = [
    { productName: 'Product 1', quantity: 1, price: 29.99 },
    // Add more items as needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id') || '';
    // Fetch actual order details based on orderId here
  }
}
