 const sectionImproviseImg=document.querySelector("#sectionImprovise img ")
 const containerPopup=document.querySelector('#containerPopup');
 const btnShow=document.querySelector('#btnShow');
// const heightScrollY=(window.scrollY+window.innerHeight)/document.body.offsetHeight
//  console.log(window.innerHeight,  document.body.offsetHeight)

 const scrollY=(heightScrollY)=>{
      if(heightScrollY>0.45){
         sectionImproviseImg.classList.add('show-scrollY-img');
      }
 }

 window.addEventListener('scroll',()=>{
     const heightScrollY=(window.innerHeight+window.scrollY)/document.body.offsetHeight
     if(heightScrollY>0.45){
      sectionImproviseImg.classList.add('show-scrollY-img');
     }
      if(heightScrollY>0.85){
      containerPopup.classList.add('show-scrollY-popup');
      // console.log(btnShow)
     }
 }) 

 btnShow.addEventListener("click",()=>{
   containerPopup.classList.add('hidden-scrollY-popup');
 })