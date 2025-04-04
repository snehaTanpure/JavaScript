
let labels = [

             ['1', '2', '3', '+'],
             ['4', '5', '6', '-'],
             ['7', '8', '9', '*'],
             ['0', '.', '=', '/']
             
             ];

let btnArr=[];

function clacu() 
{ 

let str="";

let first,second,result;
let count=0;
let choice=0;

let grid = document.createElement("table");
grid.style.width = '400px';
grid.style.height = '350px';



 let container = document.getElementById('container'); 

for (let i = 0; i < 4; i++) 
  {
        let row = document.createElement('tr');

  for (let j = 0; j < 4; j++) 
  {
      let col = document.createElement('td');
      let btnn=document.createElement("input");
      btnn.setAttribute("type","button");
      btnn.setAttribute("value",labels[i][j]);
      btnn.setAttribute("name","btnn");
      btnn.setAttribute("id",labels[i][j]);
      

      btnn.style.width="60px";
      btnn.style.height="40px";
      btnn.style.borderRadius="10%";
      btnn.style.boxShadow= "0 0 10px rgba(0,0,0,.2)";
      btnn.style.marginLeft="20px";


   
    

      btnn.addEventListener( 'mouseover',function() //change the text color 
      {
        this.style.backgroundColor="black";
        this.style.color="white";
      } );

       
    btnn.addEventListener('mouseleave',function() 
      {
         this.style.backgroundColor="white";
         this.style.color="black";
      });



      btnn.addEventListener('click',function()
      {

       this.style.backgroundColor=""   
      
      let textInput=document.getElementById("txt");
      str=textInput.value;

      if(this.value=='+')
      {
          first=document.getElementById("txt").value;
          document.getElementById("txt").value="";
          choice=1;
      } 
    
      else  if(this.value=='-')
    { 
          first=document.getElementById("txt").value;
          document.getElementById("txt").value="";
          choice=2;
    }

     else  if(this.value=='*')
    { 
           first=document.getElementById("txt").value;
           document.getElementById("txt").value="";
           choice=3;
    }

      else  if(this.value=='/')
      { 
             first=document.getElementById("txt").value;
             document.getElementById("txt").value="";
             choice=4;
      }
  


       else if(this.value=="=")
      {
           second=document.getElementById("txt").value;

           switch(choice)
           {
            case 1:
            result=parseInt(first)+parseInt(second);
            document.getElementById("txt").value=""+result;
            break;

            case 2:
            result=parseInt(first)-parseInt(second);
            document.getElementById("txt").value=""+result;
            break;

            case 3:
            result=parseInt(first)*parseInt(second);
            document.getElementById("txt").value=""+result;
            break;

            case 4:
            result=parseInt(first)/parseInt(second);
            document.getElementById("txt").value=""+result;
            break;

            default:
            alert("wrong choice");
            }
        }
        else
        {
          str=str+this.value;
          textInput.value=str;
        }

    });
    
    ++count;


      col.appendChild(btnn);

      row.appendChild(col);
  }

    grid.appendChild(row);
}

container.appendChild(grid);


}



 window.onload = clacu;