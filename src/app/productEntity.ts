export class ProductEntity
{
prodid:number;
prodname:string;
price:number;

constructor(id:number,name:string,uprice:number)
{
this.prodid=id;
this.prodname=name;
this.price=uprice;
}
}