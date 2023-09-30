// https://api.blablagues.net/?rub=blagues
const blablagueContainer= document.querySelector("body > main > .blablague-container")
const title= document.querySelector("body > main > .blablague-container h1")
const param= document.querySelector("body > main > .blablague-container p")
const btn= document.querySelector("body > main > .blablague-container .btn")
let  dataContent=null ;
const getJock=()=>{
    
    fetch("https://api.blablagues.net/?rub=blagues")
    .then((response)=>response.json())
    .then((data)=>{
        dataContent=data.data.content
        // console.log(data.data.content)
    
       title.textContent=dataContent.text_head;
       param.textContent=dataContent.text!==""?dataContent.text:dataContent.text_hidden
         
    })
}

window.addEventListener("load",getJock);
 
btn.addEventListener("click",getJock)