let btn = document.querySelector('.btn').addEventListener('click', function(){
    let city =  document.querySelector('.city-input').value;
    let result = document.querySelector('.result');
    let key = `adc22782576a7eecad238733f4199acc`
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    
fetch(url)
.then(response => response.json())
.then(data => {
    let tempCelcius = (data.main.temp) - 273.15;
    result.innerHTML = `Temperatura <br><br> ${Math.round(tempCelcius)}°C`
    })
.catch(err => alert('Cidade não encontrada'))
});