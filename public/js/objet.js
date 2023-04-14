//Declaration d'objet

/*let objet1 = {
    nom:'ouaras',
    prenom: 'zinneddine'
}

console.log(objet1.nom)

console.log(objet1.prenom)

objet1.nom='new nom';
console.log(objet1) */

//declarer une fonction

let objet1 = {
    nom:'ouaras',
    prenom: 'zinneddine',
    showname : function (){
        alert('bonjour mr : ')
    }
}
// affichage

console.log(objet1.nom)

console.log(objet1.prenom)

objet1.nom='new nom';
console.log(objet1)

objet1.showname();

// declaration d'une deuxièmme fonction


objet1.showname2 = function () {
    alert('2éme bonjour'+this.nom)

}
// Affichage

objet1.showname2();
// Afficher un tableau

let tab1 =[0,2,2]

tab1.push(6)
console.log(tab1)
console.log(tab1.length)
