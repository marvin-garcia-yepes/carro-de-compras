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
});

//Ingreso dinamico del año

yearInput.addEventListener('input', ()=>{
    yearCard.innerText = yearInput.value;
});

//Ingreso dinamico del CVC

cvcInput.addEventListener('input', ()=>{
    cvcCard.innerText = cvcInput.value;
});

//Boton confirm

let confirmBtn = document.querySelector('.form__submit');

confirmBtn.addEventListener('click', event=>{
    event.preventDefault();
    console.log(parseInt(monthInput.value))

    //validar mes
    if(parseInt(monthInput.value)>0 && parseInt(monthInput.value)<=12){
        showError(monthInput, monthErrorDiv, '', false);        
    }else{
        showError(monthInput, monthErrorDiv, 'Mont incorrect');
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
