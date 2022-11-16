/*
 DIA: 4
 objetivo: Função que muda a primeira letra pro final da palavra e adicionar "ay".
*/

function pigIt(phrase){
  let phraseArray = phrase.split(' ');
  let result = [];
  for(let word of phraseArray){
    let wordArray = word.split('');
    let firstLetter =  wordArray.splice(0,1);
    wordArray.push(firstLetter+"ay")
    result.push(wordArray.join(''))
  }
  
  return result.join(" ");
}

console.log(pigIt("Banana muito doce"))//ok -> ananaBay uitomay oceday