/*
 DIA: 5
 objetiv: Função que receba uma string de uma ou mais palavras e retorne a mesma string, mas com todas as palavras de cinco ou mais letras invertidas.
*/


//[SUCESSO]
function spinWords(str){
   return str.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join(''):word).join(' ');
}

console.log(spinWords("Oi, batatas doce e doces de batata"));//ok -> Oi, satatab doce e secdo de atatab 


/*
//[SEM SUCESSO]
//.reverce() não funciona
const spinWords = str => str.split(' ')
.map(word => word.length >= 5 ? word.split('').reverce().join('') : word).join(' ');

console.log(spinWords("gorverno mundial"));
*/