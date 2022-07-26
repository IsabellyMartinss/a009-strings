const nome = prompt("Qual seu nome?");

const foodsFavs1 = prompt("Qual sua #1º comida favorita?");
const foodsFavs2 = prompt("Qual sua #2º comida favorita?");
const foodsFavs3 = prompt("Qual sua #3º comida favorita?");

const foodsTemplateString = `Estas são as #3 comidas favoritas de ${nome}: \n${foodsFavs1} \n${foodsFavs2} \n${foodsFavs3}`

console.log(foodsTemplateString);

// const frase = prompt("Qual sua frase favorita");
// const citacaoNova = frase.replaceAll("r","l");
// console.log(citacaoNova)

// const email = prompt("Digite seu e-mail");
// const nomeMaisculo = nome.toUpperCase();
// console.log("O e-mail",  email,  "do usuário foi cadastrado com sucesso. \nBoas vindas",pessoa);
// console.log(email.includes ("@"));

// //const fraseConcatenada = "A cor preferida de " + pessoa + " é " + corFavorita + "e a citação preferida dela é:"+" \" " + citacao + " \" "

// // console.log(fraseConcatenada, nomeMaisculo.length,"tem a letra a?", nomeMaisculo.includes ("A" || "a"));

// // const fraseTemplateString = `Nome: ${nomeMaisculo} \nCor favorita: ${corFavorita}`

// // console.log(fraseTemplateString);