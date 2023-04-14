let spans_error = document.querySelectorAll('.error_msg');
let input_nom = document.querySelector('#nom');
let form_register = document.querySelector('.form_register')

console.log(spans_error)
console.log(input_nom)

const disable_spans_error = function (){
for (let i=0; i<spans_error.length;i++){
    spans_error[i].style.visibility ='hidden';
}

}

const check_require = function (element){
        if(element.value !=''&& element.value.length < 5){
            element.classList.add('input_error')
            element.nextElementSibling.style.visibility = 'visible';
        }
            else if(element.value ==''){
                element.classList.remove('input_error')
                element.classList.remove('input_success')
            element.nextElementSibling.style.visibility = 'hidden';
            }
            else {
                element.classList.remove('input_error')
                element.classList.add('input_success')
            element.nextElementSibling.style.visibility = 'hidden';
            }
    }
// activer la fonction mais d'une manière non standard
input_nom .addEventListener('keyup', check_require)

// activer la fonction mais d'une manière standard
input_nom .addEventListener('keyup', function(){
    check_require(this) 
}) 

/* input_nom.addEventListener('keyup', function(){
    if(this.value !=''&& this.value.length < 5){
        this.classList.add('input_error')
        this.nextElementSibling.style.visibility = 'visible';
    }
        else if(this.value ==''){
            this.classList.remove('input_error')
            this.classList.remove('input_success')
        this.nextElementSibling.style.visibility = 'hidden';
        }
        else {
            this.classList.remove('input_error')
            this.classList.add('input_success')
        this.nextElementSibling.style.visibility = 'hidden';

        }
    
}) */

for (let i =0; i < inputs.length; i++){

    inputs[i].addEventListener('keyup', function(){
        check_require(this)

    })
}

/*form_register.addEventListener('submit', function(event){
 event.preventDefault();

 if (true){
    this.submit();
 }
})*/




disable_spans_error();