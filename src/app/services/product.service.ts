import { Injectable, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSignal = signal<Product[]>([
    {
      id: 1,
      name: 'Producto Premium',
      description: 'Solución de alta gama con características exclusivas',
      price: 299.99,
      imageUrl: 'laptop3.jpg',
      category: 'Premium',
      rating: 4.8,
      features: ['Característica 1', 'Característica 2', 'Característica 3'],
      inStock: true
    },
    {
      id: 2,
      name: 'Producto Premium',
      description: 'Solución de alta gama con características exclusivas',
      price: 199.99,
      imageUrl: 'labtop4.jpg',
      category: 'Premium',
      rating: 2.8,
      features: ['Característica 1', 'Característica 2', 'Característica 3'],
      inStock: true
    },
    {
      id: 3,
      name: 'Producto Standard',
      description: 'Solución de alta gama con características exclusivas',
      price: 299.99,
      imageUrl: 'labtop2.png',
      category: 'Standard',
      rating: 2.8,
      features: ['Característica 1', 'Característica 2', 'Característica 3'],
      inStock: false
    },
    {
      id: 4,
      name: 'Producto Standard',
      description: 'Solución de alta gama con características exclusivas',
      price: 299.99,
      imageUrl: 'laptop1.jpg',
      category: 'Standard',
      rating: 1.8,
      features: ['Característica 1', 'Característica 2', 'Característica 3'],
      inStock: true
    },
    // ... más productos
  ]);

  constructor(private snackBar: MatSnackBar) {}

  getProducts() {
    return this.productsSignal();
  }

  getProductsByCategory(category: string) {
    return signal(
      this.productsSignal().filter(p => p.category === category)
    );
  }
  getProductById(id:number){
    console.log('product.service',id)
return this.productsSignal().find(p=>p.id==id)
  }

  addToCart(product: Product) {
    this.snackBar.open(
      `${product.name} añadido al carrito`, 
      'Cerrar',
      { duration: 3000 }
    );
  }
}