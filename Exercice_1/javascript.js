var o = 1;
var q = 1;
var p = 1;
var age1;
var age2;
var age3;
var tab1 = [];
tab1[0] = ["Moins de 20 ans"];
tab1[o] = [age];
var tab2 = [];
tab2[0] = ["Entre 20 et 40 ans"];
tab2[q] = [age];
var tab3 = [];
tab3[0] = ["Plus de 40 ans"];
tab3[p] = [age];
var age = parseInt(window.prompt("Saisir votre âge :"));
while (age<100)
{
    age = parseInt(window.prompt("Saisir votre âge :"));
    if (age<20)
    {
    tab1[o] = [age + " an(s)"];
    o++;
    }
    if (age>=20 && age<=40)
    {
    tab2[q] = [age + " an(s)"];
    q++;
    }
    if (age>40)
    {
    tab3[p] = [age + " an(s)"];
    p++;
    }
}
console.table(tab1);
console.table(tab2);
console.table(tab3);