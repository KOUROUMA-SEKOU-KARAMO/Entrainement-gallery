const scrollImg=document.querySelector('#sectionImprovise img');

window.addEventListener('scroll',()=>{
     console.log(window.scrollY)

     if(window.scrollY>500){ 
        scrollImg.style.TranslateX('300px')
     }
})