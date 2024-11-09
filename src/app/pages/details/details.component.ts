import { Component, inject, input, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule,RouterLink,MatButtonModule,MatIconModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent implements OnInit {
  miProducto!:Product
  id = input.required<number>();
  products: Product[] = [];
  productService=inject(ProductService)
  cartService=inject(CartService)

ngOnInit(): void {
  this.miProducto = this.productService.getProducts().find(p=>p.id==this.id())!;

}

 



}
