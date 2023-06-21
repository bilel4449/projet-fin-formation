var btn=document.getElementsByName('ajouter');
var zone=document.querySelectorAll('.zone');
// var div=document.querySelector('.div')
 btn.addEventListener('click',ajout);

 function ajout(event)
 {
   var cible=event.target

    if((cible.btn=="ajouter")&&(zone.innerHTML=="")){
        alert("Svp saisie les informations de personnel")
    }
    else{
        alert("personnel ajoutée")
    }
 }