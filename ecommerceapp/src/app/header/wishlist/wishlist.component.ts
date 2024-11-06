import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems = [
    { id: 1, productName: 'Product 1', price: 29.99 },
    { id: 2, productName: 'Product 2', price: 49.99 },
    // Add more items as needed
  ];

  constructor() {}

  ngOnInit(): void {
    // Here, you could fetch wishlist items from a service or local storage if needed.
  }

  removeFromWishlist(itemId: number): void {
    this.wishlistItems = this.wishlistItems.filter(item => item.id !== itemId);
  }
}
