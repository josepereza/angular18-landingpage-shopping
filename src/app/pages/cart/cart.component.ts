import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {MatListModule} from '@angular/material/list';
import { CartItem } from '../../interfaces/cart-item';
import { CurrencyPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatListModule, CurrencyPipe,MatButtonModule,MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export  default class CartComponent {
cartService= inject(CartService)
cart=signal<CartItem[]>(this.cartService.cart())

cartTotal = computed(() => {
  return this.cart().reduce((acc, cart) => acc + cart.product.price! * cart.quantity, 0);
});
removeItem(id:number){

}
}
