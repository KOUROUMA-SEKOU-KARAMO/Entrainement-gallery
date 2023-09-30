import { JsonFetch } from "../functions/api.js";
import { createElement } from "../functions/dom.js";
try {
    const containerUser=document.querySelector('.users')
    const users= await JsonFetch('https://randomuser.me/api/?results=24')
    // const reuslt=
    // console.log(containerUser)
    // const card=createElement('div',{
    //      class:"card",
    // })
    // const cardHeader=createElement('div',{
    //      class:"card-head",
    // })
    // const cardBody=createElement('div',{
    //      class:"card-body",
    // })
    // const ul=createElement('ul',{
    //      class:"ulUser",
    // })
    // const li=createElement('li',{
    //      class:"list"
    // })
    // const imgUser=createElement('img',{
    //      class:"imgUser",
    // })
    console.log(users.results[0])

    const dateParse=(date)=>{
         let newDate=new  Date(date).toLocaleDateString('en-US',{
             year:"numeric",
             month:'long',
             day:'numeric',
         })

        

         return newDate;
    }


    const dateCalc=(date)=>{
        let today=new Date();
        let todayTimsTimp=Date.parse(today)
        let  day=new Date(date)
        let TimesTimpDay=Date.parse(day)
        // let jour =today-dayj
        // let todayGet=today.getDate(today)
        
        return Math.ceil((todayTimsTimp-TimesTimpDay)/8.64e7)
    }

    for(const user of users.results){
        // containerUser.append(card);
        // card.append(cardHeader);
        // cardHeader.append(imgUser);
        // card.append(cardBody);

        // imgUser.src=`${user.picture.large}`
         containerUser.innerHTML+=`
           <div class='card'>
           <div class='card-head'>
                <div class="bg-header"><img src="${user.picture.large}"></div>
           </div>
           <div class='card-body'><h2>${user.name.first} ${user.name.last}</h2></div>
           <div class='card-body'>
           <ul>
           <li>${user.location.city}, ${dateParse(user.dob.date)}</li>
           <li>Membre de depuis : ${dateCalc(user.registered.date)} Jours</li>
      
           </ul>
           </div>
           </div>
         `
    }


} catch (e) {
    const alertElemet=createElement('div',{
       class:"alert-element",
    })
    alertElemet.textContent='Impossible de contacter le server '  ;

  document.body.append(alertElemet)
    console.error(e)
}
console.log('hello ')

// document.body.innerHTML="body"