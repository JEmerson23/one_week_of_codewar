/*
 DIA: 2.0
 objetivo: cria uma função que receba uma array de inteiros e retorne o número que aparece uma menor quantidade de vezes impar.
 exemplo: [1,3,5,4,3,3,3,9,9,9,2,2] // -> 1 por causa que 1 aparece apenas uma vez.
*/
/*
function oddAppearances(numberArray){
  let result = {};
  
  numberArray.forEach(n=>{
    result[n] ? result[n]+=1 : result[n] = 1;
  });
  
  let oddNumber;
  
  for(let number in result){
    if(result[number] % 2 != 0){
      if(oddNumber == undefined || Number(result[number]) < Number(oddNumber))
       oddNumber = [number,result[number]];
    }
  }
    
  return Number(oddNumber[1]);
} 

console.log(oddAppearances([0,1,1,2,2,2,7,8,8]))// ok -> 0
console.log(oddAppearances([1,3,5,4,3,3,3,9,9,9,2,2]))// ok -> 1
*/

/*
//[ok]
function oddAppearances(numberArray){
  let result = {};
  
  numberArray.forEach(num=>!result[num]?result[num]=1:result[num] += 1);
  
  let oddNumber = {};
  
  for(let n in result)
   if(result[n] % 2 != 0)
    oddNumber[n] = result[n];
    
  result = undefined;
  for(let n in oddNumber){
   if(result == undefined){
    result = [n,oddNumber[n]]
    continue;
   } else if(result[1] > oddNumber[n]) {
     result = [n,oddNumber[n]];
   }
   
  } 
  
  return Number(result[0]);
}

console.log(oddAppearances([1,2,2,3,3,3,8,8,8,8])); //ok -> 1
console.log(oddAppearances([2,2,3,3,8,8,8,-4])); // ok -> -4
console.log(oddAppearances([8,8,8,0,0,2,2,1,1,0,9,7,0,7]));//ok -> 9
console.log(oddAppearances([2,2,3,4,3,9,0,0,3,9,1,1,4,4,4]));//ok -> 3
*/

/*
//[minha melhor solução]

function oddAppearances(numberArray){
  let counter = [];
  numberArray.forEach(num=>!counter.find(n => n[0]==num)?counter.push([num,1]):counter[counter.findIndex(n => n[0]==num)][1]++);
  return counter.filter(num=>num[1]%2 != 0).sort((n1,n2)=> n1[1] - n2[1])[0][0];
}

console.log(oddAppearances([2,2,3,4,3,9,0,0,3,9,1,8,8,8,8]))//ok ->4
console.log(oddAppearances([9,9,7]))//ok -> 7
*/

/*
[Não há um solução melhor que a minha, pois ao não entender corretamente o objetivo do kata, onde pedia uma função para uma array que tinha apenas um inteiro com aparições impar, acabei fazendo uma para vários inteiros com aparições impar onde retorna o menor de valor menor que surgi primeiro.

  Apesar disso funciona para o objetivo dado pelo codewars.]
*/