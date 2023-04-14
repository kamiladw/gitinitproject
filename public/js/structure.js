/*alert('permier test')*/
/*console.log('test console')*/

/*var a =0;
console.log(a);

var a =2;*/


/*let a = 0;
console.log(a)


a = 2;*/


// Entrees

/*let note1 =16; // saisie par l'utilisateur*/
/*let note2 =14; // saisie par l'utilisateur*/
let note,moyenne;
let somme = 0;
let nbr = parseInt(prompt('donner le nombre de notes à saisir'))
for(let i =0; i<nbr; i++)
{
   note= parseInt( prompt('saisir la note' +(i+1)))
    somme += note;
}

moyenne = somme/nbr;

console.log('somme',somme)
console.log('moyenne',moyenne)

if(moyenne>=10) admis=true
else admis=false
console.log('admis:',admis)

if(admis==true) {

alert('vous etes admis')
}
else{

 alert('vous etes ajourné')

}



/*let note1 = prompt('saisie la note1');// saisie par l'utilisateur
let note2 = prompt('saisie la note2');// saisie par l'utilisateur

note1= parseInt(note1);
note2= parseInt(note2);*/


/*let note1 =5; // saisie par l'utilisateur*/
/*let note2 =4; // saisie par l'utilisateur*/




/*let somme, moyenne, message;
let admis;

// traitements
somme = note1+ note2;
moyenne = somme/2;
//sortie
console.log('la moyenne :',moyenne)
console.log('la moyenne :'+moyenne)


console.log(typeof(moyenne));// number
console.log(typeof(message));// string */




/*alert('la moyenne est : ',moyenne,'/20');*/
/*alert('la moyenne est : '+moyenne+'/20')*/


/*alert('la moyenne est : '+moyenne+1+'/20')*/
/* resultat = 151/20 */


/*alert('la moyenne est : '+(moyenne+1)+'/20')*/

/* resultat = 16/20 */


/*alert(message+moyenne+'/20')*/


// LES NOTES D'ETUDIANT ADMIS >= 10

/*if(moyenne>=10) admis=true
else admis=false
console.log('admis:',admis)*/


// AFFICHER UN MESSAGE VOUS ETES ADMIS "TRUE" / VOUS N'ETES PAS ADMIS "FALSE" il faut utiliser deux fois egale ==

/*if(admis==true) {

alert('vous etes admis')
}
else{

 alert('vous etes ajourné')

}*/

/* let vsaisie =prompt(message,'saisie la note 1 : ');
let typevaleursaisie = typeof(vsaisie)

console.log(vsaisie)
console.log(typevaleursaisie)*/

/*console.log('saisie la note1')
console.log('saisie la note2')*/

/* 18 Féverier 2023*/

/*let cpt = 12;
console.log("boucle 1")
while (cpt<10){
    cpt++;
    console.log('tour numéro : ',cpt)
}

cpt = 12;
console.log("boucle 2")
do{
    cpt++;
    console.log('tour numéro : ',cpt)

}while (cpt<10) */


/*let message = '';
while(message != 'fin'){
    message = prompt('saisir le msg')
    if(message != 'fin'){
        alert('le mot est erroné')
    }
}*/

/*for(let cpt=0;cpt<10;cpt++){
    console.log("tour numero : ",cpt)
}*/








