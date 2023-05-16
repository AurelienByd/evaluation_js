var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var a = tab.indexOf((window.prompt("Ecrire un prénom")));
if (a!=-1)
{
    delete tab[a];
}
else if (a==-1)
{
    window.alert("ERREUR!");
}
console.table(tab);