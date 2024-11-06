import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: string | null = null;
  productDetails: any; // Replace with your product model

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.fetchProductDetails(this.productId);
  }

  fetchProductDetails(id: string | null): void {
    // Replace this with actual fetching logic from a service
    this.productDetails = {
      id: id,
      name: 'Sample Product',
      price: 49.99,
      description: 'This is a sample product description.',
      category: 'Electronics',
      imageUrl: 'assets/images/sample-product.jpg' // Example image URL
    };
  }
}
