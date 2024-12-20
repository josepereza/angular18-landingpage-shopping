import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,RouterLink,MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
cartService= inject(CartService)
numero=5
}
