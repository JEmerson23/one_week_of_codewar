/*
 DIA: 7 - ÚLTIMO DIA
 objetivo: Função que converta RGB em HEX 
 exemplo: (255,255,255) -> FFFFFF
*/

function rgbToHex(r,g,b){
  let result = "";
  for(let color of arguments){
    if(color > 255)color = 255;
    else if(color < 0)color = Math.abs(color);
    
    let colorInHex = color.toString(16);
    result += colorInHex.length == 1 ? `0${colorInHex}` : colorInHex;
  }
  return result;
}

console.log(rgbToHex(254,50,50));//ok -> #fe3232
console.log(rgbToHex(0,0,0));// -> #000000
console.log(rgbToHex(-248,87,553))