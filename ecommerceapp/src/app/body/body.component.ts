import { Component } from '@angular/core';

interface ImageItem {
  src: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  images: ImageItem[] = [
    { src: 'assets/images/ecom.png', alt: 'Image 1', link: '#' },
    { src: 'assets/images/ecom1.png', alt: 'Image 2', link: '#' },
    { src: 'assets/images/ecom2.png', alt: 'Image 3', link: '#' },
    { src: 'assets/images/ecom3.png', alt: 'Image 4', link: '#' },
    { src: 'assets/images/ecom4.png', alt: 'Image 5', link: '#' },
    { src: 'assets/images/ecom5.png', alt: 'Image 6', link: '#' },
    { src: 'assets/images/ecom6.png', alt: 'Image 7', link: '#' },
    { src: 'assets/images/ecom7.png', alt: 'Image 8', link: '#' },
    { src: 'assets/images/ecom8.png', alt: 'Image 9', link: '#' },
    { src: 'assets/images/ecom9.png', alt: 'Image 10', link: '#' },
    { src: 'assets/images/ecom10.png', alt: 'Image 11', link: '#' },
    { src: 'assets/images/ecom11.png', alt: 'Image 12', link: '#' },
  ];
}
