document.getElementById("formulaire");

function formulaire()
{
    var name = document.forms["RegForm"]["name"];
    var email = document.forms["RegForm"]["email"];
    var fname = document.forms["RegForm"]["fname"];
    var sexe = document.forms["RegForm"]["sexe"];
    var date = document.forms["RegForm"]["date"];
    var cp = document.forms["RegForm"]["cp"];
    var adresse = document.forms["RegForm"]["adresse"];
    var city = document.forms["RegForm"]["city"];

    if (name == "")
    {
        window.alert("Mettez votre nom.");
        name.focus();
        return false;
    }
    if (email == "")
    {
        window.alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    if (email.indexOf("@", 0) < 0)
    {
        window.alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    if (email.indexOf(".", 0) < 0)
    { 
        window.alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    if (fname == "")
    {
        window.alert("Mettez votre prénom.");
        fname.focus();
        return false;
    }
    if (sexe == "")
    {
        window.alert("Cochez un élément.");
        sexe.focus();
        return false;
    }
    if (date == "")
    {
        window.alert("Ecrivez une date de naissance.");
        date.focus();
        return false;
    }
    if (cp == "")
    {
        window.alert("Mettez un code postal.");
        cp.focus();
        return false;
    }
    if (adresse == "")
    {
        window.alert("Mettez votre adresse.");
        adresse.focus();
        return false;
    }
    if (city == "")
    {
        window.alert("Mettez une ville.");
        email.focus();
        return false;
    }

    return true; 
}