// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato

import { createElement } from "./functions/dom.js";
const result=document.querySelector("#result")
const nameMeal=document.querySelector("#meal-name")
const mealForm=document.querySelector(".meals form")

let mealData=[]
const cardBody=document.querySelector(".card .card-boy")


     async  function mealFetch(search){
          await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then((response)=>response.json())
          .then((data)=>{
               mealData=data.meals
          })
          console.log(mealData[0])
     }

     

  
  function displayMeal(){ 
          mealData.length=12
  
       result.innerHTML= mealData.map((meal)=>{

          let  ingredients=[]

          for(let i=1;i<21; i++ ){
               if(meal["strIngredient"+i]){

                    ingredients.push(`<li>${meal["strIngredient"+i]} - ${meal["strMeasure"+i]}</li>` )
               }
                
          }

          // console.log(ingredients)
           return `                 
           <div class="card">
           <div class="card-header">
           <h2 class="title">${meal.strMeal}</h2>
           <h3 class="title">${meal.strArea}</h3>
           <div class="card-img-top">
              <img class="card-img-top" src="${meal.strMealThumb}" alt="Photo ${meal.strMeal}">
    
                             </div>
                             
                         </div>
                        <ul class="card-body">
                             ${ingredients.join('')} 
                        </ul>
                   
                   </div>
               `
       }
     ).join('')

     let  ingredientData=[]
     for(let meal of mealData){

           for(let i=1; i<21; i++){
               //   console.log(meal["strIngredient"+i])
               
          }
     }
  }


  nameMeal.addEventListener("input",function(e){
     mealFetch(e.target.value).then(()=>displayMeal())
  })

  mealForm.addEventListener('submit',function(e){
     e.preventDefault()
    
  })
console.log(mealForm)

 

