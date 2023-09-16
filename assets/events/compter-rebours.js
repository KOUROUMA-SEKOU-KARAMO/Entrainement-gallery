 

 const  formCompterRebours =document.querySelector(".container-compte-rebours > form ")
 const  numberCompter =document.querySelector(".container-compte-rebours > form #number")
let displayCountDown=document.querySelector('#displayCountDown');

let  totalSeconds;


function countDown(){ 
     let minutes=Math.floor(totalSeconds/60)
     let seconds=totalSeconds%60;
     let sec=seconds<10?"0"+seconds:seconds;
    displayCountDown.textContent=minutes+":"+sec; 
    if(totalSeconds>0){
         totalSeconds--
    }else{
         displayCountDown.textContent='C\'est terminé'
         clearInterval(stopSetInterval)
    }
}
formCompterRebours.addEventListener('click',function(e){
     e.preventDefault()
     if(numberCompter.value==='' || isNaN(numberCompter.value)){
         alert('La valeur  doit etre  obligatoire un  nombre ')
        //  numberCompter.value='';
     }else{
         
         totalSeconds=numberCompter.value*60
          numberCompter.value="";
          stopSetInterval=setInterval(countDown,60)
        }
 
     
})
