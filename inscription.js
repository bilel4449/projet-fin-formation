var btt=document.getElementById('btn');
var ad=document.getElementById('adr');
var md=document.getElementById('mdp');
btt.addEventListener('click',verfier);
function verfier() {
    if(ad.value == "bileltrain44@gmail.com" && md.value == "44495956bb"){
        window.location.href="principe.html"
    }
    else if((ad.value=="")&&(md.value=="")){
        alert("Svp saisie Adresse Mail et Mot De Passe")
    }
    else if (ad.value ==""){
    alert("Adresse Mail Incorecte")
    }
    else if(md.value ==""){
        alert("Mot De Passe Incorecte")
    }
    
}