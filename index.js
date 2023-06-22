var btn=document.querySelector('.button');

var id=document.querySelector('.zone');
var nom=document.querySelector('#nomp');
var prenom=document.getElementsByName('prenom');
var telephone=document.getElementById('tel');
var salaire=document.getElementById('select');
   var v=salaire.value;

 btn.addEventListener('click',ajout);
 function ajout(event){
  var cible=btn.event
  if((id.value=="")||(id.value.length<8)||(isNaN(id.value))){
    alert("donner ID personnel");
  }
  else if(nom.value==""){
    alert("donner nom personnel");
   }
   else if(prenom[0].value==""){
    alert("donner prenom");
   }
   else if(telephone.value==""){
    alert("donner le numero telephone");
   }
   
  if(v=="choisir salaire"){
   alert("choisir salaire");
   }
   else{
    alert(prenom[0].value+" "+"personnel ajoutée"+" "+"continuer");
   }
  
  }

// var id=document.getElementById('#modif-p');
// // var id=document.querySelector('.zone');
// // var nom=document.querySelector('.zone');
// // var prenom=document.querySelector('.zone');
// btn[1].addEventListener('click',modif);
// function modif(event)
// {
//   cible=event.target
//   if(id.value==""){
//     alert("donner ID personnel");
//   }
//   else if(nom.value==""){
//     alert("donner nom personnel");
//    }
//    else if(prenom.value==""){
//     alert("donner prenom");
//    }
// }
 
  
 


