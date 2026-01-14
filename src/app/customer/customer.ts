import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
customerlist=[
  {id:1,name:"Atharva"},
  {id:2,name:"Sri"},
  {id:3,name:"Jack"}
];

customerid:string="ALFKI";

customername:string;

oninput(event:any)
{
console.log(event.target.value);

}


whichbutton(event:any)
{
  console.log(event.target.value);
}

username:string;
readUserName(event:any)
{
  this.username=event.target.value;
  console.log(this.username);
}




showSelectedCustomer(cdata:any)
{
  console.log(cdata);
}


print(custid:string)
{
  this.customerid=custid;
  console.log(custid);
}

showmessage(n:string)
{
this.customername=n;
console.log("Hello " +this.customername)

}


}
