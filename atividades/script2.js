const salarioInicial = parseFloat(prompt("Digite seu salário:"));

const aumento = (30/100)*salarioInicial
const salarioFinal = aumento+salarioInicial

if(salarioInicial<500){
    console.log("Você recebeu um aumento de 30% e seu salário agora é:",salarioFinal)
}
else{
    console.log("Você não tem direito a aumento")
}
