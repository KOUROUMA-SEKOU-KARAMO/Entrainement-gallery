let lastscroll=600;
 const navBar=document.querySelector('nav');



document.addEventListener('scroll',(e)=>{ 

    if(window.scrollY<lastscroll){
        // navBar.style.top='0'
        navBar.style.position='relative'
        navBar.style.opacity='1'

    }else{ 
        navBar.style.position='fixed'
        navBar.style.zIndex='100'
        navBar.style.opacity='0.7'
        
    }
    
})