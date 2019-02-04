import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor() { 

    // Add active class to the current button (highlight it)
    
}

  ngOnInit() {
   
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i <btns.length; i++) {
    btns[i].addEventListener("click", function() 
    {
       var current = document.getElementsByClassName("active");
       console.log(current[0]);
       if(i>=i)
       {
         try{
          current[1].className= current[1].className.replace(" active", "");
        }
        catch{
          console.log("Nareh");
        }
       }
       current[0].className = current[0].className.replace(" active", "");
     
       this.className += " active";
    });
  }
  }
  
  
}
