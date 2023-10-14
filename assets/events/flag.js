// https://restcountries.com/v3.1/all


let countriesData=[];
 let methodeSort="triCroissant"
const resultCountries=document.querySelector("#flags");
const flagLingth=document.querySelector("#flagLingth");
const triCountries=document.querySelectorAll(".triCountry")

async function fetchFlag(){
   
   await  fetch("https://restcountries.com/v3.1/all")
    .then((response)=>response.json())
    .then((data)=>{
        countriesData=data
         console.log(countriesData[2])
    })
    .then(()=>displayCountries())
    
}

console.log(flagLingth.value)


function displayCountries(){

    
    resultCountries.innerHTML=countriesData
    .filter((countries)=>countries.translations.fra.common.toLowerCase().includes(nameCountry.value.toLowerCase()))
    .slice(0,flagLingth.value)
    .sort((a,b)=>{
        if(methodeSort==='triCroissant'){
             return a.population-b.population
        }else if(methodeSort==="triDecroissant"){
             return b.population-a.population
        }else if(methodeSort==="triAlpha"){
             return a.translations.fra.common.localeCompare(b.translations.fra.common)
        }
    })
    .map((country)=>{
        return  `
         <li class="card">
                <div class="card-header">
               <img src="${country.flags.svg}" alt="Drapeau ${country.translations.fra.common}">
                </div>

                <div class="card-body">
                    <h2>${country.translations.fra.common}</h2>
                    <h3>Capital :  ${country.capital}</h3>
                    <h3>Population: ${country.population.toLocaleString()}</h3>
                </div>
         </li>
 
         `
    }).join("")

    
}


window.addEventListener("load",fetchFlag);
nameCountry.addEventListener('input',displayCountries)

flagLingth.addEventListener("input",function(e){
    displayCountries()
    displayLingth.textContent=e.target.value
})

triCountries.forEach((triCountry) => {
   triCountry.addEventListener("click",function(e){
     
    methodeSort=e.target.id
     displayCountries()
   }) 
});