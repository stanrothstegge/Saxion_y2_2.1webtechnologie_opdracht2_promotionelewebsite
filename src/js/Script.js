/**
 * Created by Gebruiker on 30-9-2017.
 */
var menubar = document.getElementById("menubar");

var sticky = menubar.offsetTop;

function scrollFunction() {
    if (window.scrollY >= sticky) {
        menubar.classList.add("sticky")
    } else {
        menubar.classList.remove("sticky");
    }
}

function Bestelkaarten() {
    var elements = document.getElementById("bestel").elements;

    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }
    var invoerCorrect = true;
    if(obj.firstName == ""){
        invoerCorrect = false;
        alert("Voornaam mag niet leeg zijn");
    }
    if(obj.lastName == ""){
        invoerCorrect = false;
        alert("Achternaam mag niet leeg zijn");
    }
    if(obj.aantalkaarten = ""){
        invoerCorrect = false;
        alert("Geef op hoeveel kaarten u wilt bestellen");
    }
    if(obj.email = ""){
        invoerCorrect = false;
        alert("U moet u emailadres opgegeven om door te gaan");
    }
    if(invoerCorrect){
        var text = "Bedankt " +  obj.firstName + " " + obj.lastName + " , Uw kaarten zijn besteld."
        var ik = document.getElementById('testt');
        ik.innerHTML += '<p> ' + text + ' </p>';
    }
}
function ValidateInput() {
    var input = document.getElementById("contactgeg").elements;
    var objects ={};
    for(var i = 0 ; i < input.length ; i++){
        var item = input.item(i);
        objects[item.name] = item.value;
        alert(item.value)
    }
    var invoerCorrect = true;
    if(objects.firstName == ""){
        invoerCorrect = false;
        alert("Voornaam mag niet leeg zijn");
    }
    if(objects.lastName == ""){
        invoerCorrect = false;
        alert("Achternaam mag niet leeg zijn");
    }
    if(objects.email = ""){
        invoerCorrect = false;
        alert("Email mag niet leeg zijn");
    }
    if(objects.telnr = ""){
        invoerCorrect = false;
        alert("Telefoonnummer mag niet leeg zijn");
    }else{
        if(!isNaN(objects.aantalkaarten.toString())){
            invoerCorrect = false;
            alert("Onjuist telefoonnummer");
        } else{
            if(objects.telnr.length > 10 || objects.telnr.length < 10){
                invoerCorrect = false;
                alert("Onjuist telefoonnummer");
            }
        }
    }
    if(!invoerCorrect){
        alert("U heeft één of meerdere gegevens niet ingevuld, of de ingevoerde gegevens zijn onjuist");
    }
}

