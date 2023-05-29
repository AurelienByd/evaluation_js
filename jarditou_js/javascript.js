let myform = document.getElementById("form");

myform.addEventListener('submit', function(s) {
    let myname = document.getElementById("name");
    let myfname = document.getElementById("fname");
    let mysexef = document.getElementById("sexef");
    let mysexem = document.getElementById("sexem");
    let mydate = document.getElementById("date");
    let mycp = document.getElementById("cp");
    let myregex1 = /^[a-zA-Z-\s]+$/;
    let myregex2 = /^[0-9]+$/;

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
})