//CARDHOLDER NAME
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

//CARD NUMBER
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error');

//MM
let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

//YY
let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error');

//CVC
let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardCvc');
let cvcErrorDiv = document.querySelector('.form__input-cvc--error');

//Ingreso dinamico de nombre

nameInput.addEventListener('input', ()=>{
    if (nameInput.value == '') {
        nameCard.innerText = 'JANE APPLESEED'        
    }else{
        nameCard.innerText = nameInput.value;
    }
});

//Ingreso dinamico de numero

numberInput.addEventListener('input', event=>{

    let inputValue = event.target.value;

    //actualizando graficamente la targeta
    numberCard.innerText = numberInput.value;

    //validanda cuanda hay letras
    let regExp = /[A-z]/g;
    if (regExp.test(numberInput.value)) {
        showError(numberInput, numberErrorDiv,'Wrong format, number only');
           
    }else{
        numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        showError(numberInput,numberErrorDiv, '', false);
    }
    //nostrando los ceros por defecto cuando no se ha ingresado nada
    if (numberInput.value == '') {
        numberCard.innerText = '0000 0000 0000 0000';
        
    }
});

//Ingreso dinamico del mes

monthInput.addEventListener('input', ()=>{
    monthCard.innerText = monthInput.value;
    validateLetters(monthInput, monthErrorDiv);
});

//Ingreso dinamico del año

yearInput.addEventListener('input', ()=>{
    yearCard.innerText = yearInput.value;
    validateLetters(yearInput, yearErrorDiv);
});

//Ingreso dinamico del CVC

cvcInput.addEventListener('input', ()=>{
    cvcCard.innerText = cvcInput.value;
    validateLetters(cvcInput, cvcErrorDiv);
});



//Boton confirm

let confirmBtn = document.querySelector('.form__submit');

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

let fromSection = document.querySelector('.form');
let thankSection = document.querySelector('.thanks-section');

confirmBtn.addEventListener('click', event=>{
    event.preventDefault();

    if (verifyIsFilled(nameInput, nameErrorDiv)) {
        nameValidation = true;       
    }else{
        nameValidation = false;
    }

    //Validar numero
    if (verifyIsFilled(numberInput, numberErrorDiv) == true){
        if (numberInput.value.length == 19){
            showError(numberInput, numberErrorDiv, '', false); 
            numberValidation = true;           
        }else{
            showError(numberInput, numberErrorDiv, 'Wrong number');
            numberValidation = false;
        }
        
    }

    //Validar mes
    if (verifyIsFilled(monthInput, monthErrorDiv)) {
        if(parseInt(monthInput.value)>0 && parseInt(monthInput.value)<=12){
            showError(monthInput, monthErrorDiv, '', false); 
            monthValidation = true;       
        }else{
            showError(monthInput, monthErrorDiv, 'Mont incorrect');
            monthValidation = false;
        }
    }
   
    //Validar año
    if (verifyIsFilled(yearInput, yearErrorDiv)) {
        if (parseInt(yearInput.value)> 23 && parseInt(yearInput.value)<28 ) {
            showError(yearInput, yearErrorDiv, '', false);
            yearValidation = true;
        }else{
            showError(yearInput, yearErrorDiv, 'Wrong Year');
            yearValidation = false;
        }
        
    }

    //Validar cvc
    
    if (verifyIsFilled(cvcInput, cvcErrorDiv)) {
        if (cvcInput,value.length == 3) {
            showError(cvcInput, cvcErrorDiv, '', false);  
            cvcValidation = true;          
        }else{
            showError(cvcInput, cvcErrorDiv, 'Wrong CVC');
            cvcValidation = false;
        }
    }

    if(nameValidation == true && numberValidation == true && monthValidation == true  && yearValidation == true  && cvcValidation == true){
        fromSection.styles.display = 'none';
        thankSection.styles.display = 'block';
    }

});



//FUNCIONES
function showError(divInput, divError, msgError, show = true){
    if (show) {
        divError.innerText = msgError;
        divInput.style.borderColor = '#FF0000';
    }else{
        divError.innerText = msgError;
        divInput.style.borderColor = ' hsl(270, 3%, 87%)';
    } 
}

function verifyIsFilled(divInput, divError){
    if (divInput.value.length> 0) {
        showError(divInput, divError, "", false);  
        return true;      
    }else{
        showError(divInput, divError, "Can't be blank");
        return false;
    }
}

function validateLetters(input, divError){
    let regExp = /[A-z]/g;
    if (regExp,test(input.value)) {
        showError(input, divError, 'Wrong format, number only');        
    }else{
        showError(input, divError, '', false)
    }
}
