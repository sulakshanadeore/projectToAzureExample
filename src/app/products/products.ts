import { Component } from '@angular/core';
import { ProductEntity } from '../productEntity';
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 productslist:ProductEntity[]=[];

 constructor()
 {
  this.productslist.push(
    new ProductEntity(1,"Tea",10),
    new ProductEntity(2,"Coffee",20),
    new ProductEntity(3,"Special Coffee",40)
  );
 }
}
