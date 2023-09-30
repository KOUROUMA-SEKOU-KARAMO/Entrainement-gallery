const displayPrice=document.getElementById("display-price")
const span=document.querySelector("#display-price>span")
const totalPriceSpan=document.querySelector("#totalPrice> span")
let  today=new Date().toISOString().split("T")[0]
start_date.value=today;
start_date.min=today

let  tomorrow=new Date()
tomorrow.setDate(tomorrow.getDate()+1)
const tomorrowFormat=tomorrow.toISOString().split("T")[0]

end_date.value=tomorrowFormat;
end_date.min=tomorrowFormat;


function bookCalc(){
  const diffTimes=Math.abs(new Date(end_date.value)- new Date(start_date.value))
let diffDays=Math.ceil(diffTimes/(1000*60*60*24))

// displayPrice.textContent=
totalPriceSpan.textContent=span.textContent*diffDays+"$"

}

bookCalc()

start_date.addEventListener('change',(e)=>{
  let day=new Date(e.target.value)
  // day.toISOString()

  if(start_date.value>end_date.value){
     day.setDate(day.getDate()+1)
     end_date.value=day.toISOString().split("T")[0]
    }
})

end_date.addEventListener("change",function(e){
    let day=new Date(e.target.value)
    if(start_date.value>end_date.value){ 
      day.setDate(day.getDate()-1)
      start_date.value=day.toISOString().split('T')[0]

    }

})


start_date.addEventListener("change",bookCalc)
end_date.addEventListener("change",bookCalc)