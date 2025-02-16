import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../../model/products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, ProductAlertsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products]; //??

  share() {
    window.alert('Esto es un window.alert emergente que se activa con la funcion share()!');
  }

  onNotify() {
    window.alert('Te avisa cuando este de oferta, esto es una lert de onNotify()');
  }
}

