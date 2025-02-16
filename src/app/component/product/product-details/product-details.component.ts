import { Component, inject } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../../model/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
private route = inject(ActivatedRoute);
private cartService = inject(CartService);
product: Product | undefined;

  ngOnInit() {
    const routeId = Number(this.route.snapshot.paramMap.get('productId'));
    console.log(routeId);

    this.product = products.find(product => product.id == routeId);
    console.log(this.product);


  }
  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Producto añadido al carro');
  }
}
