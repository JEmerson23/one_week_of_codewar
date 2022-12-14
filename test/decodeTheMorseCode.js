/*
 DIA: 6 
 objetivo: Um decodificador de código morse simples
*/

//criei uma tabela de código Morse improvisada para poder fazer os teste
function morseCode() {
  this.alphabet = {
  a:'.-',
  b:'-...',
  c:'-.-.',
  d:'-..',
  e:'.',
  f:'..-.',
  g:'--.',
  h:'....',
  i:'..',
  j:'.---',
  k:'-.-',
  l:'.-..',
  m:'--',
  n:'-.',
  o:'---',
  p:'.--.',
  q:'--.-',
  r:'.-.',
  s:'...',
  t:'-',
  u:'..-',
  v:'...-',
  w:'.--',
  x:'-..-',
  y:'-.--',
  z:'--..',
  ch:'----'
}
  this.numbers =  {
    '1':'.----',
    '2':'..---',
    '3':'...--',
    '4':'....-',
    '5':'.....',
    '6':'-....',
    '7':'--...',
    '8':'---..',
    '9':'----.',
    '0':'-----'
  }
  this.symbols = {
    '.':'.-.-.-',
    ',':'--..--',
    '?':'..--..',
    '!':'..--.',
    ':':'---...',
    '"':'.-..-.',
    '\'':'.----.',
    '=':'-...-'
  }
  this.code = function(str){
      if(/[a-zA-Z]/.test(str)){
        return this.alphabet[str];
      } else if(/[0-9]/.test(str)){
        return this.numbers[str];
      } else if(/[.,?"':=]/.test(str)){
        return this.symbols[str];
      } 
  };
  
  this.translate = function(str){
    let result = [this.alphabet,this.numbers,this.symbols].find(character => Object.keys(character).find(key => character[key] === str));
    return Object.keys(result).find(key => result[key] === str);
  };
  
  this.getAll = function(){
    let result = {}
    let code = [this.alphabet,this.numbers,this.symbols];
    code.forEach(prop => {
      for(let p in prop){
        if(!(p in result))
         result[p] = prop[p];
      }
    });
    return result;
  }
}

const MORSE_CODE = new morseCode().getAll();
//------------------//

/*
//[QUASE SUCESSO]
function decodeMorse(MorseCode){
  //um espaço separa as letras e três
  const MORSE_CODE = new morseCode();
  return MorseCode.split('   ')
  .map(word => word.split(' ')
  .map(letter => letter === ' '? ' ':MORSE_CODE.translate(letter)).join('')).join(' ').toUpperCase();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));// -> HEY JUDE

console.log(decodeMorse(" . ..- "))

//console.log( new morseCode().code('i'));ok
//console.log( new morseCode().translate("."));ok
*/

/*
//[QUASE SUCESSO]
function translate(string,dictionary ,toMorseCode=true){
  if(!toMorseCode)
   return Object.keys(dictionary).find(key => dictionary[key] === string);
  else 
   return dictionary[string];
}

console.log(translate("e",MORSE_CODE));//ok -> .
console.log(translate(".",MORSE_CODE,false));//ok -> e

function replace(phrase,dictionary) {
  let result = [];
  phrase.split('   ').forEach(word => {
    result.push(word.split(' ')
     .map(letter => letter != '' ? translate(letter,dictionary,false) : " ")
      .join(''));
      
    //end 
  });
  
  return result.join(' ');
}

console.log(replace(' - --- -.. ---   --- ..-   -. .- -.. .- ',MORSE_CODE));
*/

/* 
//[QUASE SUCESSO]
function decodeMorse(string){
  const result = [];
  const translate = letter => Object.keys(MORSE_CODE).find(key => MORSE_CODE[key] == letter);
  
  string.split('   ')
   .forEach(word =>{
     result.push(word.split(' ')
      .map(letter => letter != '' ? translate(letter) : " ")
       .join(''));
     //. -. -..
   });
   return result.join(' ').toUpperCase();
}

console.log(decodeMorse(' ... ..- -.-. . ... ... --- '));//ok -> SUCESSO

console.log(decodeMorse('   .... . -.--   '))
*/

//[minha melhor solução]
//[SUCESSO]
function decodeMorse(string){
  //Esta função não é importante para o Kata do codewars
  const translate = letter => Object.keys(MORSE_CODE).find(key => MORSE_CODE[key] == letter);
  //----------code------------//
  const result = [];
  
  string.split('   ').forEach(word => {
    result.push(
      word.split(' ')
       .map(letter => translate(letter))
        .join('')
    );
  });
  
  return result.join(' ').trim().toUpperCase();
}

console.log(decodeMorse(' .... . .-.. .-.. ---   .-- --- .-. .-.. -.. '));//ok -> HELLO WORLD