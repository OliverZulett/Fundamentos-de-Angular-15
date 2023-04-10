import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  product = {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80',
    name: 'Tasty Granite Salad',
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    unitAvailable: 20,
  }

  productImageStyle = {
    border: '1px solid black',
    filter: 'sepia(0)'
  }

  formState = false

  address = ''
  postalCode = 0

  buyProduct() {
    console.log('compraremos un producto');
    this.formState = true
  }

  orderProduct() {
    console.log(`Direccion de usuario: ${this.address}`);
    console.log(`Codigo postal: ${this.postalCode}`);
  }

  addToCart() {
    console.log('agregaremos un producto al carro de compras');
  }

  onMouseEnter() {
    console.log('mouse enter');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0.3)'}
  }

  onMouseleave() {
    console.log('mouse leave');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0)'}
  }
}
