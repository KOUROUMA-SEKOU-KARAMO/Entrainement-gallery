const   navigationManaul=document.querySelector('.navigation-manual');
const   navigationAuto=document.querySelector('.slide1-checkbox');
const   elementSlides1=document.querySelector('.slides1');


let counter=1;

setInterval(function(){
 
    document.getElementById('slide1-btn' + counter).checked=true;
    counter++;
    if(counter>4){ 
          counter=1;
          
      }
},5000)

