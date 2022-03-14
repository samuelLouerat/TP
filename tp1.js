// effectuer un tirage de 0 à 100 jusqu'a tout les numeros soient tirés
let numero=Math.round(Math.random() * 101);
let Tablnumero=[];
let countTabl=0;
let nbEssai=0
while (countTabl<99) {
    nbEssai++;
    if (Tablnumero.indexOf(numero)==-1){
        Tablnumero.push(numero)
        countTabl++;
    }
numero=Math.round(Math.random() * 101);
}
console.log("vous avez fait :" + nbEssai +" essai");
console.log(Tablnumero.sort().toString());


//trier les lettre ordre alphabetique
let text="une chaine avec des lettres dans un certain ordre pour donner du sens";
text=text.replace(/ /g,"");
const chars = text.split('');
console.log(chars.sort().toString());


//majuscule
let text3="une phrase sans majuscule"
let phraseAvecMaj="";
const tableauText = text3.split(' ');
for (const texte of tableauText) {
    phraseAvecMaj+= texte[0].toUpperCase() + texte.slice(1)+" ";
}
console.log(phraseAvecMaj);
