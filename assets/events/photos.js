const photosContainer=document.querySelector(".photos-container")
const btnDelete=document.querySelector(".photos-container  ")

let  photos=[]


 async function photoFetch(){
     await  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response)=>response.json())
   .then((data)=>{
            photos=data
             photos.length=30
        console.log(photos[0]);
   
   }).then(()=>dispalyPhoto())
 }




  function dispalyPhoto(){
    photosContainer.innerHTML=photos.map((photo)=>{
        //    console.log(photo)
         photos.length=30
        return `
           
                <div class="card">
                <div class="btn-delete" >X</div>

                        <div class="card-header">
                                <img src="${photo.url}" alt="">
                        </div>
                        <div class="card-body">
                            <h2 class="title" >${photo.title} </h2>
                        </div>
                </div>
         
        `
    }).join("")
  }

  window.addEventListener("load",photoFetch)

  console.log(btnDelete)
