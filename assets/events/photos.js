const photosContainer=document.querySelector(".photos-container")
const btnDelete=document.querySelector(".photos-container .btn-delete")

let  photos=[]


 async function photoFetch(){
     await  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response)=>response.json())
   .then((data)=>{
            photos=data
             photos.length=30
        console.log(photos[0]);
   
   })
 }

 await photoFetch()


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
  dispalyPhoto()

  console.log(btnDelete)
