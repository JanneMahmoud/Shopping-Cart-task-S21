import { Component, computed, effect, signal } from '@angular/core';
import { Product } from './models/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  // ==========================================
  // AVAILABLE PRODUCTS
  // ==========================================

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 25000,
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 15000,
    },
    {
      id: 3,
      name: 'Headphones',
      price: 2000,
    },
    {
      id: 4,
      name: 'Keyboard',
      price: 1200,
    },
    {
      id: 5,
      name: 'Mouse',
      price: 800,
    },
    {
      id: 6,
      name: 'Smart Watch',
      price: 5000,
    },
  ];

  // ==========================================
  // CART SIGNAL
  // ==========================================
  // signal() creates reactive state.
  // The cart starts empty.

  cart = signal<Product[]>([]);

  // ==========================================
  // COMPUTED TOTAL PRICE
  // ==========================================
  // computed() automatically recalculates
  // whenever cart changes.

  totalPrice = computed(() =>
    this.cart().reduce(
      (sum, product) => sum + product.price,
      0
    )
  );

  // ==========================================
  // COMPUTED CART COUNT
  // ==========================================

  cartCount = computed(() => this.cart().length);

  // ==========================================
  // EFFECT
  // ==========================================
  // Runs automatically whenever the cart changes.

  constructor() {
    effect(() => {
      console.log('Cart items count:', this.cart().length);
    });
  }

  // ==========================================
  // ADD PRODUCT TO CART
  // ==========================================
  // Uses update() to add a product.

  addToCart(product: Product): void {
    this.cart.update((currentCart) => [
      ...currentCart,
      product,
    ]);
  }

  // ==========================================
  // REMOVE PRODUCT FROM CART
  // ==========================================
  // Uses update() to remove one product by index.

  removeFromCart(index: number): void {
    this.cart.update((currentCart) =>
      currentCart.filter(
        (_, currentIndex) => currentIndex !== index
      )
    );
  }

  // ==========================================
  // CLEAR CART
  // ==========================================
  // Uses set() to replace the entire cart.

  clearCart(): void {
    this.cart.set([]);
  }
}