var btn=document.querySelector('.button');

var id=document.querySelector('.zone');
var nom=document.querySelector('#nomp');
var prenom=document.getElementsByName('prenom');
var telephone=document.getElementById('tel');

 btn.addEventListener('click',ajout);
 function ajout(event){
  var cible=btn.event
  if(id.value==""){
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
   var salaire=document.getElementById('select');
   var v=salaire.value;
   if(v=="choisir salaire"){
   alert("choisir salaire")
   }
   else{
    alert(nom.value+" "+"personnel ajoutée")
   }
  }
 
  
 


