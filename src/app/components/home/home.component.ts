import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

export interface product{
  id:number,
  title:string,
  description:string,
  price:number,
  discountPercentage:number,
  rating:number,
  stock:number,
  brand:string
  category:string,
  thumbnail:string,
  images:string[]
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private router: Router, private userService: UserService, private productsService: ProductsService){}
  
  products:product[] = [];

  cartItems:product[] = [];

  ngOnInit(){
    this.productsService.getProducts()
    .subscribe((data:any) => {
      this.products = data;
    });
  }

    logout_user(){
      this.userService.logout();
      this.router.navigate(['login']);
    }

    addToCart(item:product){
      this.cartItems.push(item);
    }

    emptyCart(){
      this.cartItems = [];
    }

    removeItem(item:product){
      let index : number = this.cartItems.indexOf(item, 0);
      this.cartItems.splice(index, 1);

    }

    getCartTotal(){
      if(this.cartItems.length){
        return this.cartItems.map((item)=>item.price).reduce((a,b)=>a+b);
      } else{
        return 0;
      }
    }
}
