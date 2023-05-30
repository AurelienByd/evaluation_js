let myform = document.getElementById("form");

myform.addEventListener('submit', function(s) {
    let myname = document.getElementById("name");
    let myfname = document.getElementById("fname");
    let mysexef = document.getElementById("sexef");
    let mysexem = document.getElementById("sexem");
    let mydate = document.getElementById("date");
    let mycp = document.getElementById("cp");
    let mymail = document.getElementById("email");
    let mysujet = document.getElementById("sujet");
    let myquestion = document.getElementById("question");
    let myaccept = document.getElementById("accepter");
    let myregex1 = /^[a-zA-Z-\s]+$/;
    let myregex2 = /^[0-9]+$/;
    let myregex3 = /^[0-9][0-9]+\.[0-9][0-9]+\.[0-9][0-9]([0-9][0-9])+$/;
    let myregex4 = /^[a-zA-Z0-9@.]+$/;

    if (myname.value.trim() == "") {
        let myerror = document.getElementById("error");
        myerror.innerHTML = 'Le champs est requis.';
        myerror.style.color = "red";
        s.preventDefault();
    } else if (myregex1.test(myname.value) == false) {
        let myerror = document.getElementById("error");
        myerror.innerHTML = 'Seuls les lettres et les tirets sont autorisés.';
        myerror.style.color = "red";
        s.preventDefault();
    }

    if (myfname.value.trim() == "") {
        let myerror2 = document.getElementById("error2");
        myerror2.innerHTML = 'Le champs est requis.';
        myerror2.style.color = "red";
        s.preventDefault();
    } else if (myregex1.test(myfname.value) == false) {
        let myerror2 = document.getElementById("error2");
        myerror2.innerHTML = 'Seuls les lettres et les tirets sont autorisés.';
        myerror2.style.color = "red";
        s.preventDefault();
    }

    if (mysexef.checked == "" && mysexem.checked == "") {
        let myerror3 = document.getElementById("error3");
        myerror3.innerHTML = 'Veuillez cocher un genre.';
        myerror3.style.color = "red";
        s.preventDefault();
    }

    if (myregex3.test(mydate.value) == false) {
        let myerror4 = document.getElementById("error4");
        myerror4.innerHTML = 'Veuillez écrire une date valide. (00.00.0000)';
        myerror4.style.color = "red";
        s.preventDefault();
    }

    if (mycp.value.trim() == "") {
        let myerror5 = document.getElementById("error5");
        myerror5.innerHTML = 'Le champs est requis.';
        myerror5.style.color = "red";
        s.preventDefault();
    } else if (myregex2.test(mycp.value) == false) {
        let myerror5 = document.getElementById("error5");
        myerror5.innerHTML = 'Seuls les chiffres sont autorisés.';
        myerror5.style.color = "red";
        s.preventDefault();
    }

    if (mymail.value.trim() == "") {
        let myerror6 = document.getElementById("error6");
        myerror6.innerHTML = 'Le champs est requis.';
        myerror6.style.color = "red";
        s.preventDefault();
    } else if (myregex4.test(mymail.value) == false) {
        let myerror6 = document.getElementById("error6");
        myerror6.innerHTML = 'Veuillez écrire une adresse mail correcte.';
        myerror6.style.color = "red";
        s.preventDefault();
    }

    if (mysujet.value == "") {
        let myerror7 = document.getElementById("error7");
        myerror7.innerHTML = 'Veuillez choisir un sujet.';
        myerror7.style.color = "red";
        s.preventDefault();
    }

    if (myquestion.value.trim() == "") {
        let myerror8 = document.getElementById("error8");
        myerror8.innerHTML = 'Veuillez écrire votre question.';
        myerror8.style.color = "red";
        s.preventDefault();
    }

    if (myaccept.checked == "") {
        let myerror9 = document.getElementById("error9");
        myerror9.innerHTML = 'Veuillez cocher.';
        myerror9.style.color = "red";
        s.preventDefault();
    }
})