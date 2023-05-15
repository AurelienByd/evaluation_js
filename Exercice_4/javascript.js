var PU = window.prompt("Quel est le prix ?");
var QTECOM = window.prompt("Quelle est la quantité ?");
var PAP;
var REM;
var PORT = 6;
var TOT = (PU*QTECOM);
if (TOT<100)
{
    PAP = TOT+PORT;
    window.alert("Le prix à payer est de " + PAP + "€");
}
if (TOT>=100 && TOT<=200)
{
    REM = TOT*0.95;
    PAP = REM + PORT;
    window.alert("Le prix à payer est de " + PAP + "€");
}
if (TOT>200)
{
    REM = TOT*0.90;
if (REM>500)
{
    PORT = 0;
    PAP = REM;
    window.alert("Le prix à payer est de " + PAP + "€");
}
else if (REM<=500)
{
    PORT = PORT*0.98;
    PAP = REM + PORT;
    window.alert("Le prix à payer est de " + PAP + "€");
}
}