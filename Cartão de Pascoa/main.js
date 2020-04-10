var btn = document.getElementById('btn2');

btn.addEventListener('click', printName);

function printName(){
  var txt1 = document.getElementById('txt1');
  var txt2 = document.getElementById('txt2');
  var p1 = document.getElementById('p1');
  var p2 = document.getElementById('p2');
  
  p1.innerHTML = "" + "De: "  + txt1.value;
  p2.innerHTML = "" + "Para: " + txt2.value;
}

