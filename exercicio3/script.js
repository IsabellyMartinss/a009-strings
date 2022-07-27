const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const frase2 = frase.replace("verde","rosa").replace("azul","laranja");
console.log (frase2);

const temGreen = frase2.includes("verde");
const temOrange = frase2.includes("laranja");

console.log(`A frase acima contém a palavra "verde"?`,temGreen);
console.log(`A frase acima contém a palavra "laranja"?`,temOrange);

console.log(frase2.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"));
