const today=new Date().toISOString().split('T')[0]

start_date.value=today
start_date.min=today;

let tomorrow= new Date()
// tomorrow+1;
tomorrow.setDate(tomorrow.getDate()+1)
let tomorrowformat=tomorrow.toISOString().split('T')[0]

end_date.value=tomorrowformat
end_date.min=tomorrowformat

start_date.addEventListener("change",function(e){
     
   let day=new Date(e.target.value);

   if(start_date.value>end_date.value){
     day.setDate(day.getDate()+1);
     end_date.value=day.toISOString().split("T")[0]
   }
})

end_date.addEventListener("change",function(e){
      
    let day=new Date(e.target.value);
     
    if(end_date.value<start_date.value){ 
        day.setDate(getDate()-1);

        start_date.value=day.toISOString().split()[0]
    }


    
})

