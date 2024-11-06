import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Replace with your item type

  constructor() {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    // Fetch cart items from a service or local storage
    // For now, we'll use mock data
    this.cartItems = [
      { id: 1, name: 'Product 1', quantity: 2, price: 20 },
      { id: 2, name: 'Product 2', quantity: 1, price: 15 }
    ];
  }

  get totalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
