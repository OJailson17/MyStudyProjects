// Evento
let btn = document.querySelector('.btn').addEventListener('click', takeValues);

// Função que recebe os valores dos inputs
function takeValues(){
    // Radio Inputs
    let typeNum = document.querySelector('#num-type');
    let typeString = document.querySelector('#str-type');
    let typeBoolean = document.querySelector('#boo-type');

    // Input values
    let firstValue = document.querySelector('#first-value').value;
    let secondValue = document.querySelector('#second-value').value;

    let result = document.querySelector('.result').innerHTML = 
    Validation(typeNum, typeString, typeBoolean, firstValue, secondValue);
}

// Valida todos os requisitos para realizar corretamente a comparação
function Validation(num, str, boo, value1, value2){
    if(value1 === '' || value2 === ''){
        return 'Preencha todos os campos';
    }
    else if(num.checked){
        Number(value1, value2)
        return compareValues(value1, value2)
    }
    else if(str.checked){
        return compareValues(value1, value2);
    }
    else if(boo.checked){
       return Boolean(compareValues(value1, value2));
    }
}

let compareValues = (value1, value2) => value1 === value2 ? true : false;