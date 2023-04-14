// selection des elements

/*let testdiv1 = document.querySelectorAll('#testdiv1');
console.log(testdiv1)*/

let testdiv1 = document.querySelector('#testdiv1');
console.log(testdiv1)

/*testdiv1.style.background = 'red';*/

/*setTimeout(function(){

    testdiv1.style.background = 'red';

}, 4000)*/

// selection des elements


 let testP1 = document.querySelector('#testP1')

console.log(testP1)


/*setTimeout(function(){
    
    testP1.style.background = 'green';

}, 8000 ,
)

setTimeout(function(){

    testdiv1.style.background = 'red';

}, 4000)*/



/*setTimeout( function(){
    testdiv1.style.background = 'red';
  setTimeout( function(){
        testP1.style.background = 'green';

  }, 4000)
}, 4000)   */


/*-----------25 Février 2023---------------------------*/


// 2 éme méthode -- les évenements

/* testdiv1.onclick = function (){
    alert('2éme méthode') 
} */

/* testdiv1.addEventListener('click',function(){
     alert('3éme méthode')}) */

/*testdiv1.addEventListener('click',function (){
    if(testdiv1.style.background =='yellow')
    {
    this.style.background ='green';
    }
    else {
        this.style.background = 'yellow';
    }

})  */

// MENU BOUTTON
// 1 Séléction des éléments

let btnNav = document.querySelector('#btnNav'),
Nav = document.querySelector('#Nav');

let btnGrid = document.querySelector('#btnGrid'),
btnBlock = document.querySelector('#btnBlock'),
divArticles = document.querySelectorAll('.article');

console.log(btnNav)
console.log(Nav)
/* console.log(btnNav,Nav)*/



// 2 Déclaration des fonctions de traitements

/* const navAnimate = function (){
    Nav.style.left='0%';
}
navAnimate ()
*/

// 2.1 Déclaration pour afficher et cacher le nav
/* const navAnimate = function (){
    if(Nav.style.left=='0%')
    {
        Nav.style.left = '-20%'
    }
    else{
        Nav.style.left = '0%'
    }
} */
// 2.2 Déclaration 
const navAnimate = function (element){
    if(element.style.left=='0%') element.style.left = '-'+ 
    element.offsetWidth+"px"; 
    else element.style.left = '0%'
}

const changeFormat = function(className){
    for(let i = 0;i<divArticles.length; i++){
        divArticles[i].className= className;
    }
}

changeFormat ('article2') /*  pour tester la boucle*/

// 3 Déclaration des evenements

/*btnNav.addEventListener('click',function (){
    navAnimate() 
}) */

/*btnNav.addEventListener('click',function (){navAnimate(Nav) }) 

Nav.addEventListener('mouseover', function(){navAnimate(Nav)})

Nav.addEventListener('mouseout', function(){navAnimate(Nav) })*/

 btnNav.addEventListener('click',function (){navAnimate(Nav) }) 

Nav.addEventListener('mouseover', function(){navAnimate(this)})

Nav.addEventListener('mouseout', function(){navAnimate(this) })


btnGrid.addEventListener('click', function(){
    changeFormat("article2")
})

btnBlock.addEventListener('click',function(){
    changeFormat("article")
})




















