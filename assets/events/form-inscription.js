const showFormInscription=document.querySelector('#showFormInscription');
 const FormInscription=document.querySelector('.form-inscription')
const inputs =document.querySelectorAll('.form-inscription form >div input ')


/**
 * 
 * @param {string} tag prendrer le nom tag 
 * @param {string} message  affiche le message d'erreur pour les utilisateurs 
 * @param {boolean} valid verifit la validité de l'élément 
 */
// const containerfirstName=document.querySelector('.form-inscription form .container-'+'first-'+'name');
const displayError=(tagName,message,valid)=>{
  const container=document.querySelector('.form-inscription form .container-'+tagName)
  const span=document.querySelector('.form-inscription form .container-'+tagName+'> span')
  if(!valid){
     container.classList.add('error');
     span.textContent=message;
     span.classList.add('error')
     console.log(valid)

  }else{
     container.classList.remove('error');
    span.textContent=message

  }
  
}

const checkFirstName=(value)=>{
  if(value.length>0 && (value.length<3 || value.length>30)){
    displayError('first-name','Le first name doit avoir au moin 3 minimum et 20 max caracterers ')
  }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
    displayError('first-name','Le first name ne doit pas contenir les caracters speciaux ');
  }else{
    displayError('first-name','',true)
  }
}
const checkLastName=(value)=>{
  if(value.length>0 && (value.length<3 || value.length>20)){
    displayError('last-name','Last name doit avoir minimum 3 et 20 caracteres max ')
  }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
     displayError('last-name','Last ne doit pas contenir les caracteres speciaux ')
   }else{
     displayError('last-name','',true)
   }

}
const checkEmail=(value)=>{
    if(!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )){ 
     displayError('email','Email invalide ')
    }else{
      displayError('email','',true)
    }

}
const checkPassWord=(value)=>{

}
const checkConfirmPassword=(value)=>{
    console.log(value)

}

inputs.forEach((input)=>{
     input.addEventListener('input',(e)=>{
        switch(e.target.id){
             case 'firstName':checkFirstName(e.target.value); break;
             case 'lastName':checkLastName(e.target.value); break;
             case 'email':checkEmail(e.target.value); break;
             case 'password':checkPassWord(e.target.value); break;
             case 'confirmPassword':checkConfirmPassword(e.target.value); break;
             default: null;
        }
     })
})

 /**
  * Event click pour formulaire d'inscription 
  */
showFormInscription.addEventListener('click',(e)=>{
    e.preventDefault()
  FormInscription.classList.toggle('show-form-inscription')
})


