let texto = 'Hello World';

let vogais = ['a', 'e', 'i', 'o', 'u'];

texto = texto.toLowerCase();

let arrayLetras = texto.split("");

let arrayVogais = [];

let vazio = [" "];

let espacos = [];

let consoantes = ['b', 'c',
    'd', 'f',
    'g', 'h',
    'j', 'k',
    'l', 'm',
    'n', 'p',
    'q', 'r',
    's', 't',
    'v', 'w',
    'x', 'y',
    'z'];

let consoantesEncontradas = [];

for (i = 0; i < arrayLetras.length; i++) {
    if (vogais.includes(arrayLetras[i])) {
        arrayVogais.push(arrayLetras[i]);
    } else if (consoantes.includes(arrayLetras[i])) {
        consoantesEncontradas.push(arrayLetras[i]);
    } else if (vazio.includes(arrayLetras[i])) {
        espacos.push(arrayLetras[i]);
    };
};

console.log("Texto original: " + texto);

console.log("O número de vogais é: " + arrayVogais.length);

console.log("As vogais encontradas são: " + arrayVogais.toString());

console.log("O número de consoantes é: " + consoantesEncontradas.length);

console.log("As consoantes encontradas são: " + consoantesEncontradas.toString());

console.log("O número de espaços é: " + espacos.length);