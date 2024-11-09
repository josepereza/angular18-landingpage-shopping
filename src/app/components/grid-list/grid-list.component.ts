import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { ProductService } from '../../services/product.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { CardComponent } from '../card/card.component';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [CardComponent,CommonModule,
    MatGridListModule,
    MatChipsModule,],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export default class GridListComponent {
  productService = inject(ProductService);
  cartService= inject(CartService)
  private breakpointObserver = inject(BreakpointObserver);
  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(
    //private route: ActivatedRoute,
    private router: Router  ) {}

  cols$ = this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ])
    .pipe(
      map(result => {
        if (result.breakpoints[Breakpoints.XSmall]) return 1;
        if (result.breakpoints[Breakpoints.Small]) return 2;
        if (result.breakpoints[Breakpoints.Medium]) return 3;
        return 4;
      })
    );
    ngOnInit() {
      this.loadProducts();
    }

    loadProducts() {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
    }

  filterProducts($event:any) {
    // Implementar filtrado
    //this.selectedCategory = $event;
    console.log($event.value)
    this.filteredProducts = $event.value === 'all' 
      ? this.products 
      : this.products.filter(p => p.category === $event.value);
  }

  gotoDetails(id:number) {
    console.log('gotodetails')
    //const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/details',  id ]);
  }
}
