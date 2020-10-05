// evento de clique do botão
let btn = document.querySelector('.btn').addEventListener('click', takeData);


// Recebe todos os dados
function takeData(){
    let resultValue = document.querySelector('.result-btn');
    let minValue = Number(document.querySelector('#min-value').value)
    let maxValue = Number(document.querySelector('#max-value').value);
    let negativeValue = document.querySelector('#negative-number');
    let decimalValue = document.querySelector('#decimal-number');
    let random = document.querySelector('#random-number');

    let checkResult = checkBoxes(negativeValue, decimalValue, random);
    
    if(checkResult === 'nenhum'){
        minValue === 0 || maxValue === 0 ? alert('Insira os valores') :
        resultValue.value = gerarNumero(minValue, maxValue, resultValue);
    }else{
        validNumber(minValue, maxValue, checkResult, resultValue);
    }
}

// Verifica quais opções dicioanis estão marcadas
function checkBoxes(negative, decimal, random){
    if(negative.checked){
        return 'negativos'
    }else if(decimal.checked){
        return 'decimais';
    }else if(random.checked){
        return 'aleatórios';
    }else{
        return 'nenhum';
    }
}

// gera um número aleatório
function gerarNumero(min, max, result){
    return result.value = Math.floor(Math.random() * (max - min + 1) + min);
}

// Verifica se os números colocados nos inputs estão corretos
function validNumber(min, max, check, result){
    if(check === 'negativos'){
       return min > 0 || max > 0 ? alert('Insira apenas números negativos') : gerarNumero(min, max, result)
    }else if(check === 'decimais'){
        return decimalNum(min,max,result);
    }else if(check === 'aleatórios'){
        return gerarNumero(10000, 1000000, result);
    }else{
        return alert('ERRO! Recarregue a página e tente novamente');
    }
}

// gera um número decimal
function decimalNum(min, max, result){
    return result.value = (Math.random() * (max - min + 1) + min).toFixed(1);;
}