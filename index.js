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
   
  else if(v=="choisir salaire"){
   alert("choisir salaire");
   }
   else{
    alert(prenom[0].value+" "+"personnel ajoutée"+" "+"continuer");
   }
  
  }
  
  var btnmodif=document.getElementById('btnn');
  var idmodif=document.getElementById('modif-p');
  var nommodif=document.getElementById('nom-modif');
  var prenommodif=document.getElementById('pre-modif');
  var ancsalaire=document.getElementById('anc-sal');
  var nousalaire=document.getElementById('nou-sal');
  btnmodif.addEventListener('click',modifier)
  function modifier(event)
  {
    var cible=btnmodif.event
    if(idmodif.value=="")
    {
      alert("donner id personnel")
    }
    else if(nommodif.value==""){
      alert("donner nom personel")
    }
    else if(prenommodif.value==""){
      alert("donner prenom personel")
    }
    else if(ancsalaire.value==""){
      alert("donner ancien salaire personel")
    }
    else if(nousalaire.value==""){
      alert("donner nouveau salaire personel")
    }
    else{alert(prenom.value+" "+"personnel modifié")}
  }

  var idper=document.getElementById('id-per');
  var nomper=document.getElementById('nom-per');
  var prenomper=document.getElementById('per-pr');
  var btncal=document.getElementById('btn-cal');
  var nb=document.getElementById('nb-j');
  var saljour=document.getElementById('sal-jour');
  var salaire=document.getElementById('sal');
  btncal.addEventListener('click',calcul)
  function calcul(event){
    var cible=btncal.event
    if(idper.value==""){
      alert("donner id personnel");
    }
    else if(nomper.value==""){
      alert("donner nom personnel")
    }
    else if(prenomper.value==""){
      alert("donner prenom personnel");
    }
    salaire.value=saljour.value*nb.value;
    
    alert("salaire du"+" "+prenom.value +" est"+" "+salaire.value);
  }
  var iper=document.getElementById('i-per');
  var nper=document.getElementById('n-per');
  var pper=document.getElementById('p-per');
  var btnsupp=document.getElementById('supp-per');
  btnsupp.addEventListener('click',supprimer);
  function supprimer(event){
    var cible=btnsupp.event
    if(iper.value==""){
      alert("donner id personnel");
    }
    else if(nper.value==""){
      alert("donner nom personnel");
    }
    else if(pper.value==""){
      alert("donner prenom personnel");
    }
    else{
      alert(pper.value+" "+"personnel supprimé");
    }
  }
