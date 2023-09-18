 const containerCompterRebours=document.querySelector('.container-compte-rebours');
 const  formCompteRebours=document.querySelector('.container-compte-rebours >form');
 const  inputAdd=document.querySelector('.container-compte-rebours form  >#number');
 const  displayCountDown=document.querySelector('.container-compte-rebours #displayCountDown');
let totalSeconds;
let   stopSetInterval;

  const countDown=()=>{
       
     const minutes=Math.floor(totalSeconds/60)
     const secondRest=totalSeconds%60;
     const addZero=secondRest<10?'0'+secondRest:secondRest
     displayCountDown.textContent=minutes+":"+addZero;

      if(totalSeconds<0 || totalSeconds===0){
           displayCountDown.textContent="C'est terminé" 
           clearInterval(stopSetInterval)
          }else{
               
               totalSeconds--

      }

  }



formCompteRebours.addEventListener('submit',function(e){
     e.preventDefault()


     if(inputAdd.value==='' || isNaN(inputAdd.value)){
          alert('le formulaire ne doit pas prendre le contenu vide et il doit être un nombre ')
     }else{
          totalSeconds=inputAdd.value*60;
          inputAdd.value=''
          clearInterval(stopSetInterval)
        stopSetInterval=setInterval(countDown,100)
     }
       
      
})












//  const  formCompterRebours =document.querySelector(".container-compte-rebours > form ")
//  const  numberCompter =document.querySelector(".container-compte-rebours > form #number")
// let displayCountDown=document.querySelector('#displayCountDown');

// let  totalSeconds;


// function countDown(){ 
//      let minutes=Math.floor(totalSeconds/60)
//      let seconds=totalSeconds%60;
//      let sec=seconds<10?"0"+seconds:seconds;
//     displayCountDown.textContent=minutes+":"+sec; 
//     if(totalSeconds>0){
//          totalSeconds--
//     }else{
//          displayCountDown.textContent='C\'est terminé'
//          clearInterval(stopSetInterval)
//     }
// }
// formCompterRebours.addEventListener('click',function(e){
//      e.preventDefault()
//      if(numberCompter.value==='' || isNaN(numberCompter.value)){
//          alert('La valeur  doit etre  obligatoire un  nombre ')
//         //  numberCompter.value='';
//      }else{
         
//          totalSeconds=numberCompter.value*60
//           numberCompter.value="";
//           stopSetInterval=setInterval(countDown,60)
//         }
 
     
// })
