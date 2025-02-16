import { Routes } from "@angular/router";
import { ProductListComponent } from "./component/product/product-list/product-list.component";
import { ProductDetailsComponent } from "./component/product/product-details/product-details.component";
import { SupplierComponent } from "./component/supplier/supplier.component";
import { SupplierListComponent } from "./component/supplier/supplier-list/supplier-list.component";
import { CartComponent } from "./component/cart/cart/cart.component";
import { ShippingComponent } from "./component/shipping/shipping.component";


const routes: Routes = [
    {path: '',component: ProductListComponent, title: 'Home page'},
    {path: 'cart',component: CartComponent, title: 'Cart'},
    {path: 'shipping',component: ShippingComponent, title: 'Shipping Prices'},
    {path: 'suppliers',component: SupplierComponent, title: 'Suppliers'},
    {path: 'suppliers/:id',component: SupplierListComponent, title: 'Supplier details'},
    {path: 'products/:productId',component: ProductDetailsComponent,title: 'Product details'}
  ];

    export default routes;
