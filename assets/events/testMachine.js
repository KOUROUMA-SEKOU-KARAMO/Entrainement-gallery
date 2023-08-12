 const elementH1=document.querySelector(".containerTestAnime h1");
 let wordIndex=0;
 let letterIndex=0;
 const arrayWords= ['Developper' , 'photograph','Design']
 let lengthArray=0;


 const createLetter=()=>{
     
    let createSpan=document.createElement('span');
       
    elementH1.append(createSpan)
    createSpan.textContent=arrayWords[wordIndex][letterIndex];
     setTimeout(()=>{
         createSpan.remove();
     },2800)

 }
 
 const loop=()=>{
     
    setTimeout(()=>{
        if(wordIndex>=arrayWords.length){
            wordIndex=0; 
             letterIndex=0;
            loop()
        }else if(letterIndex<arrayWords[wordIndex].length){ 
            createLetter();
             letterIndex++;
             loop();
        }
        else{ 
            wordIndex++
            letterIndex=0;
            setTimeout(()=>{
                 loop();
                // createSpan.remove();
            },2800)
       
        }
    },50)

 }

 loop();

//  const createLetter=()=>{
// const   createSpan=document.createElement('span');
//       elementH1.appendChild(createSpan);

//       createSpan.textContent=arrayWords[wordIndex][letterIndex]
//       setTimeout(()=>{
//           createSpan.remove()
//       },2800)
//  };

//   const loop=()=>{
//      setTimeout(()=>{
//       if(wordIndex>=arrayWords.length){
//          wordIndex=0;
//          letterIndex=0;
//          loop()
//       }else if(letterIndex<arrayWords[wordIndex].length){
//         createLetter();
//         letterIndex++;
//         loop();
//    }else{
//      wordIndex++;
//      letterIndex=0;
//      setTimeout(()=>{
//         loop();
//     },2900)
//    }
//      },90);
//   }

//   loop();



