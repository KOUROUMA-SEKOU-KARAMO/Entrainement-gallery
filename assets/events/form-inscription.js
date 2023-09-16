const showFormInscription=document.querySelector('#showFormInscription');
 const FormInscription=document.querySelector('.form-inscription');
 const showFormInscription2=document.querySelector('.form-inscription >i');
const inputs =document.querySelectorAll('.form-inscription form >div input[type="text"], input[type="password"] ')
const form =document.querySelector('.form-inscription form');
const submit=document.querySelector('.form-inscription form input[type="submit"]');
 const progressBar=document.getElementById("progressBar");
   
 let firstName,lastName, email, password, confirmPassword;

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

  }else{
     container.classList.remove('error');
    span.textContent=message

  }
  
}

const checkFirstName=(value)=>{
  if(value.length>0 && (value.length<3 || value.length>30)){
    displayError('first-name','Le first name doit avoir au moin 3 minimum et 20 max caracterers ');
    firstName='';

  }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
    displayError('first-name','Le first name ne doit pas contenir les caracters speciaux ');
    firstName='';
  }else{
    displayError('first-name','',true);
    firstName=value;
  }
}
const checkLastName=(value)=>{
  if(value.length>0 && (value.length<3 || value.length>20)){
    displayError('last-name','Last name doit avoir minimum 3 et 20 caracteres max ');
     lastName='';
  }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
     displayError('last-name','Last ne doit pas contenir les caracteres speciaux ');
     lastName='';

   }else{
     displayError('last-name','',true);
     lastName=value;

   }

}
const checkEmail=(value)=>{
    if(!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )){ 
     displayError('email','Email invalide ');
      email='';
    }else{
      displayError('email','',true);
      email=value;

    }

}
const checkPassWord=(value)=>{
    if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){
      displayError('password','Le mot de pass avoir au moin cararctere majuscule et  des minisculs et  8  caracteres un  ');
       password='';
       progressBar.classList.remove('progressBarGreen');
       progressBar.classList.remove('progressBarBlue');
       progressBar.classList.add('progressBarRed');

    }else if(value.length>8 && value.length<12 ){
      displayError('password','',true);
      progressBar.classList.remove('progressBarRed');
      progressBar.classList.remove('progressBarGreen');
      progressBar.classList.add('progressBarBlue');

      password=value;
    }else{
      displayError('password','',true);
      progressBar.classList.remove('progressBarBlue');
      progressBar.classList.add('progressBarGreen');
      password=value;      
    }
}

// Kourouma1212@
const checkConfirmPassword=(value)=>{
   if(value!==password){ 
    displayError('confirmPassword','Le mot de passe ne correspond  pas ');
    confirmPassword=""
   }else{
     displayError('confirmPassword','',true);
     confirmPassword=value;
   }
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
showFormInscription2.addEventListener('click',(e)=>{
    e.preventDefault()
  FormInscription.classList.toggle('show-form-inscription')
})



form.addEventListener('submit',(e)=>{
  e.preventDefault();

   if(firstName && lastName && email && password && confirmPassword){
         let   data={
             firstName,
             lastName,
             email,
             password
         }
         
         firstName=null;
          lastName=null;
         email=null;
         password=null;
         
         alert('Inscription validée')
         form.reset()
   } else{
      alert('Veillez remplir le formulaire ')
   }
   
})

// submit.addEventListener('click',(e)=>{
//   form.reset()
// })


9