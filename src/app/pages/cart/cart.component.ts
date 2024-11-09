import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {MatListModule} from '@angular/material/list';
import { CartItem } from '../../interfaces/cart-item';
import { CurrencyPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatListModule, CurrencyPipe,MatButtonModule,MatCardModule,RouterLink,MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export  default class CartComponent {
cartService= inject(CartService)


removeItem(id:number){
this.cartService.removeProductFromCart(id)
}
}
