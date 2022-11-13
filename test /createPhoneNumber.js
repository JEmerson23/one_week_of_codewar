/*
 objetivo: criar uma função que receba uma array com números de 0-9 e
 retorne uma string no formato de um número de telefone.
 exemplo: [1,2,3,4,5,6,7,8,9,0] -> "(123) 456-7890"
*/

/*
function createPhoneNumber(numberArray){
  if(!numberArray.every(n => n <= 9 && n >= 0))return false;
  
  let ddd = numberArray.slice(0,3).join('');
  let part1 = numberArray.slice(3,3).join('');
  let part2 = numberArray.slice(6,4).join('');
  
  return `(${ddd}) ${part1}-${part2}`
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
*/

/*

//[A melhor que eu fiz]

function createPhoneNumber(numberArray){
  if(!numberArray.every(n => n <= 9 && n >= 0 && Number.isInteger(n)))return false;
  
  return `(${numberArray.splice(0,3).join('')}) ${numberArray.splice(0,3).join('')}-${numberArray.splice(0,4).join('')}`;
}

console.log(createPhoneNumber([2,3,4,6,7,8,0,1,9,5]));//ok
console.log(createPhoneNumber([2,4,6,8,0,1,3,5,7,9]));//ok
console.log(createPhoneNumber([13,4,8,9,0,7,7,1,5,0]));//no ok 
console.log(createPhoneNumber([0,8,2,9.5,7,2.1,1,8,3,3]));//no ok */

//[A melhor resposta que encontrei no codeWar na minha visão]

function createPhoneNumber(numberArray){
  return numberArray.reduce((result,number)=>result.replace('x',number),"(xxx) xxx-xxxx");
}

console.log(createPhoneNumber([0,1,1,8,7,4,2,9,0,3]));//ok