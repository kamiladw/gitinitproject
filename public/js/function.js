// declaration d'une fonction//
const checkadmis = function (nbr){

let note,moyenne,admis;
let somme = 0;
/*let nbr = parseInt(prompt('donner le nombre de notes à saisir'))*/
for(let i =0; i<nbr; i++)
{
   note= parseInt( prompt('saisir la note' +(i+1)))
    somme += note;
}
/*moyenne = somme/nbr;*/
/*calculMoy(somme,nbr)*/
moyenne = calculMoy(somme,nbr)

console.log('somme',somme)
console.log('moyenne',moyenne)

if(moyenne>=10) admis=true
else admis=false
console.log('admis:',admis)

if(admis==true) {
alert('vous etes admis')}
else{alert('vous etes ajourné')}

return admis;

}

const calculMoy = function (somme,nbr){
    moyenne = somme/nbr;
    return moyenne;
}

/*let resultMoy = calaculMoy(45,4)
console.log('test fonction moyenne', resultMoy)*/



//appel et execution de la fonction

/*let sortieadmis = checkadmis();
console.log('admis:',sortieadmis)*/
/*let result1 = checkadmis(2)*/
let nbr=parseInt(prompt('donner le nombre de notes à saisir'))
let result1 = checkadmis(nbr)
console.log(result1)

/* tableau*/

/*let tab1 = [];  
console.log(tab1)
tab1.push(2);
tab1.push(12);
tab1.push(5);
tab1.push(10);
tab1.push(5);
console.log(tab1)
tab1[1] = 'new 12'
console.log(tab1)

for(let i=0 ; i < tab1.length; i++){
    console.log('la colone ',i, 'contient : ' ,tab1[i])
    /*tab1[i]=0;*/
   /* if(tab1[i] == 5) tab1[i] = 0;

}

console.log(tab1)  */


let etudiant1 = ['warass','zineddinne',20];

console.log('votre nom: ',etudiant1[0])
console.log('votre prenom: ',etudiant1[1])



let etudiant10bj = {
    tel : "0551894599",
    adresse : 'adresse',
    nom : 'warass',
    prenom : 'zinddinne',
    age : 20,

    showname : function(){
       /* alert('bienvenu')*/
       alert('bienvenu'+ this.nom)
    }
}

console.log(etudiant10bj)
console.log('votre nom: ',etudiant10bj.nom)
console.log('votre prenom: ',etudiant10bj.prenom)


etudiant10bj.nom= 'new nom'
etudiant10bj.showname()

/*---------24 févréier 2023------------*/
/* PROGRAMME DE CALCULE DE LA SOMME*/

/*let a= 5,b= 6;
let s;


s=a+b
console.log(s) */

/*DECLARATION DE LA FONCTION DE CALCULE DE LA SOMME*/

/*const somme = function (){
    console.log('test fonction')

}*/

/*const somme = function (){
    let a= 5;
    let b= 6;
    let s;
    s=a+b;
   console.log(s)
}

 */

const somme = function (a,b){
   
    let s;
    s=a+b;
    return s;
}

/*execution de la fonction de calcule de la somme*/

/*somme()
somme()
somme()*/

let s1 = somme (18,19)
console.log(s1)


// 1 programme pour déclarer un tableau

/* let tab1 = []
for (let i = 0; i<10; i++){
    tab1.push(5)
    
console.log(tab1)
}

 */


// 2 declaration de la fonction 


/*const tableInsert =function () {
    let tab1 = []
   for (let i = 0; i<10; i++){
    tab1.push(5)}

 return (tab1);
    
}*/

// 3 affichage

/*let resulta1 = tableInsert();
console.log(resulta1) */



//2 DECLARATION DE LA FONCTION DYNAMIQUE

/*const tableInsert =function (tablength) {
    let tab1 = []
   for (let i = 0; i<tablength; i++){
    tab1.push(5)}

 return (tab1);

   } */
// 3 affichage

/*let resulta1 = tableInsert(2);
console.log(resulta1);*/



//2 DECLARATION DE LA FONCTION DYNAMIQUE + Augmentation des valeur avec 2


/*const tableInsert =function (tablength) {
    let tab1 = []
    let valAug =0;

   for (let i = 0; i<tablength; i++){
    tab1.push(valAug+=2)}

 return (tab1);

   } */
// 3 affichage

/*let resulta1 = tableInsert(2);
console.log(resulta1)
console.log(tableInsert(5)) */

//2 DECLARATION DE LA FONCTION DYNAMIQUE 

const tableInsert = function (tablength,valup,valint) {
    let tab1 = []
    let valAug =valint;

   for (let i = 0; i<tablength; i++){
    tab1.push(valAug)
    valAug+=valup;
}


    return (tab1);
}

// 3 affichage

let resulta1 = tableInsert (2,3,0);
console.log(resulta1)
console.log(tableInsert(5,4,100))







