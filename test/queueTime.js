/*
 DIA: 3
 objetivo:
  contador que tem como base um array com inteiros que representam o
  tempo que cada clientes levará, e um inteiros que representam o número de atendentes.
*/

/*
//[SEM SUCESSO]
function queueTime(customerArray,attendant){
  if(attendant == 1)return customerArray.reduce((pv,cv)=>pv+=cv,0);
  
  let time = 0;
  attendant = (()=>{
    let r = {}
    while(attendant){
      attendant--;
    }
  })()
  
  while(customerArray.some(c => c > 0)){
    customerArray = customerArray.map(c => c = c - 1);
    time++;
  }
  let i;
  do {
    for(let c = 0; c < attendant; c++){
      
    }
    
  } while(customerArray.some(c => c > 0));
   
  return time;
  
  // se tiver mais divide as pessoas por caixa
  //cada ao acabar o tempo da pessoa passa para proxima
  //enquanto o caixa C1 estiver ocupado o caixa C2 vai está rodando assim sucessivamente
}

console.log(queueTime([1,2,3],1));//ok -> 6
console.log(queueTime([2,3,10,2],2))
*/

/*
//[SEM SUCESSO]
function queueTime(customers, attendant){
  if(attendant == 1)
   return customers.reduce((time,customerTime)=>time+=customerTime,0);
   
   let time = 0;
   
   attendant = (function(na,o=[]){
     async function attendance(customerTime){
       while(customerTime > 0){
         time++;
         customerTime--;
       }
       
       await true;
     }
     
     while(na>0){
       o.push(attendance);
       na--;
     }
     return o;
   })(attendant)
   
   for(let c of customers)
     for(let a of attendant){
       a()
     }
  
}

console.log(queueTime([2,5,8],1));// -> 15

console.log(queueTime([2,3,10,2],2))
*/

/*
//[SEM SUCESSO]
function queueTime(customers,n){
  if(n == 1)customers.reduce((time,customerTime)=>time += customers,0);
  
  let time = 0;
  
  n = (()=>{
    let attendantList = []
    while(n){
      attendantList.push(0);
      n--;
    }
    return attendantList;
  })();
  
  while(customers.length > 0){
    for(let attendant of n){
      attendant+=customers.splice(0,1)[0];
    }
  }
  
  reduce n.reduce
}
*/

/*
//[SUCESSO]
function queueTime(customers,attendant){
  if(attendant == 1)return customers.reduce((time,customerTime)=>time+=customerTime,0);
  
  attendant = new Array(attendant).fill(0);
  
  customers.forEach(customerTime=>{
    attendant[attendant.indexOf(Math.min(...attendant))] += customerTime;
  });
  
  return Math.max(...attendant);
}

console.log(queueTime([2,5,8],1));//ok -> 15
console.log(queueTime([2,3,10,2],2));//ok -> 12
*/

//Infelizmente não consegui criar por conta própria, pesquisei a resposta, análisei e refiz da maneira que achei melhor.

//fonte: https://stackoverflow.com/questions/63723345/the-supermarket-queue-javascript-best-practice-solution

//[minha melhor solução]

function queueTime(customers,attendant){
  attendant = new Array(attendant).fill(0);
  
    customers.forEach(customerTime=>{
    attendant[attendant.indexOf(Math.min(...attendant))] += customerTime;
  });
  
  return Math.max(...attendant);
}

console.log(queueTime([2,5,8],1));//ok -> 15
console.log(queueTime([2,3,10,2],2));//ok -> 12
