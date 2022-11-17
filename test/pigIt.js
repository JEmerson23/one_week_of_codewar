/*
 DIA: 4
 objetivo: Função que muda a primeira letra pro final da palavra e adicionar "ay".
*/

/*
//[SUCESSO]
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
*/

//[SUCESSO]
/*
function pigIt(phrase){
  return phrase.split(' ').map(word => {
    if(!/[^a-zA-Z]/.test(word)){
      return word.substr(1)+word[0]+"ay";
    } else return word;
  }).join(' ');
}

console.log(pigIt("Leite quente !"))
*/

//[minha melhor solução]
const pigIt = phrase => phrase.split(' ').map(word => !/[^a-zA-Z]/.test(word)?word.substr(1)+word[0]+"ay":word).join(' ');

console.log(pigIt("Suco de tomate ?"))