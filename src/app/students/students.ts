import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
      isAttentive:boolean=true;
    rollno:number=10;
    name:string="Ameya";
    marks:number=100;

 
    numberofTimesClicked:number=0;

convertToUpperCase()
{
this.name=this.name.toUpperCase();

}


showDataEntered()
{

  console.log(this.marks);
  console.log(this.name);
  console.log(this.rollno)
}


EnableButton()
{
    this.isAttentive=false;

}

   DisableButton()
   {
    this.isAttentive=true;
   }



    WhenClicked()
    {
  
this.numberofTimesClicked+=1;

    }


}
