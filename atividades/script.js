const name = prompt('Digite o seu nome');
const gender = prompt('Digite F para feminino e M para masculino');
const age = parseInt(prompt('Digite sua idade'));
const contribution = parseInt(prompt('Digite seu tempo de contribuição'));

const calculoAposentadoria = age + contribution;

const homemPodeAposentar = gender == 'M' && contribution >= 35 && calculoAposentadoria >= 95;
const mulherPodeAposentar = gender == 'F' && contribution >= 30 && calculoAposentadoria >= 90;

if(homemPodeAposentar || mulherPodeAposentar) {
    document.getElementById('info').innerHTML = `${name}, você PODE se aposentar, aproveite o resto da sua vida`
} else {
    document.getElementById('info').innerHTML = `${name}, você NÃO PODE se aposentar, trabalhe mais um pouquinho`
}