const altura = parseFloat(prompt("Digite sua altura em metros"));
const peso = parseFloat(prompt("Digite seu peso"));

const calculo = peso/(altura**2)

if(calculo<18.5){
    "MAGREZA"
}
else if(calculo>18.5 && calculo<=24.9){
    "NORMAL"
}
else if(calculo>25 && calculo<=29.9){
    "SOBREPESO"
}
else if(calculo>30 && calculo<=39.9){
    "OBESIDADE"
}
else if(calculo>40){
    "OBESIDADE GRAVE"
}

// console.log("seu peso é:",calculo)