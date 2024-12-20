import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartItem[]>([]);

  constructor(private snackBar: MatSnackBar) {}
  /*  addProductToCart(product: Product, quantity: number) {
    console.log(product)
    const cartItem: CartItem = {product, quantity};
    this.cart.update(cart => [...cart, cartItem]);
    console.log(this.cart())
  }  */


  addProductToCart(product: Product,quantity:number) {
    this.snackBar.open(
      `${product.name} añadido al carrito`, 
      'Cerrar',
      { duration: 3000 }
    );
    this.cart.update((currentCart) => {
     const existingItem = currentCart.find(
       (i) => i.product.id === product.id
     );

     if (existingItem) {
       // Increment quantity if item already exists
       existingItem.quantity=existingItem.quantity + quantity ;
     
       return [...currentCart]
             
       
     } else {
       // Add the new item if it doesn't exist
       const cartItem: CartItem = {product, quantity};
       return [...currentCart, cartItem ]      
       
      }
   
   
   }); 

   
 } 

 cartTotal = computed(() => {
  return this.cart().reduce((acc, cart) => acc + cart.product.price! * cart.quantity, 0);
});

 cartQuantity = computed(() => {
  return this.cart().reduce((acc, cartItem: CartItem) => acc + cartItem.quantity, 0);
}); 

  updateProductQuantity(productId: number, quantity: number) {
    if (quantity === 0) {
      this.removeProductFromCart(productId);
      return;
    }
    this.cart.update(cart => cart.map(cartItem => {
      if (cartItem.product.id === productId) {
        cartItem.quantity = quantity;
      }
      return cartItem;
    }));
  }

  removeProductFromCart(productId: number | undefined) {
    this.cart.update(cart => cart.filter(cartItem => cartItem.product.id !== productId));
  }
}
