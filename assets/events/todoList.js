
const  todoForm=document.querySelector('.todo-Form form ');
const  input =document.querySelector('.todo-Form form #todoList ');
const  listTodo =document.querySelector('.listTodo');
const  lists =document.querySelectorAll('.listTodo');
 


// input.addEventListener('input',(e)=>{
//        console.log(id.value)
// })

function storeList(){
   window.localStorage.todoList=listTodo.innerHTML
}


function getTodo(){
   listTodo.innerHTML=window.localStorage.todoList
}

lists.forEach((list)=>{
    list.addEventListener("click",(e)=>{
       if(e.target.classList.contains('checked')){
         e.target.remove()
         storeList()
       }else{
         e.target.classList.add('checked')
         storeList()
       }

    })
})


getTodo()

todoForm.addEventListener('submit',(e)=>{
  e.preventDefault()
    
 if(input.value===''){
   return
 }

 const li =document.createElement('li')

 storeList()
//  listTodo.innerHTML+=`
//  <li>${input.value}</li>

// `
li.innerHTML=input.value
listTodo.prepend(li)
input.value=""

})
