const photosContainer=document.querySelector(".photos-container")


 fetch('https://jsonplaceholder.typicode.com/photos')
 .then((response)=>response.json())
.then((photos)=>{
     console.log(photos[0]);
    //  const imgsAnimal=photos.images.animaux

    //  photosContainer.innerHTML=`
    //     <h1>${imgsAnimal.titre} </h1>
    //  `

})