/* 
  See prompt at https://leetcode.com/problems/keyboard-row/
*/

let input = ["Hello", "Alaska", "Dad", "Peace", "type", "pretty", "reap", "Mom", "repeat", "shall", "Pewtiepie"];
let output = [];

const lineOne = ["Q","q","W","w","E","e","R","r","T","t","Y","y","U","u","I","i","O","o","P","p"];
const lineTwo = ["A","a","S","s","D","d","F","f","G","g","H","h","J","j","K","k","L","l"];
const lineThree = ["Z","z","X","x","C","c","V","v","B","b","N","n","M","m"];

function validateWordArray(array){
  array.forEach(function(word){
    validateWord(word);
  });
  function validateWord(word){
    let wordArray = word.split("");
    let lineOneResults = [];
    let lineTwoResults = [];
    let lineThreeResults = [];
    wordArray.forEach(function(index){
      if (lineOne.includes(index)){
        lineOneResults.push(index)
      } 
      if (lineOneResults.length === wordArray.length){
        var googWord1 =  lineOneResults.join("");
        output.push(googWord1);
        
      }
  
      if (lineTwo.includes(index)){
        lineTwoResults.push(index)
      } 
      if (lineTwoResults.length === wordArray.length){
        var goodWord2 = lineTwoResults.join("");
        output.push(goodWord2);
      }
  
      if (lineThree.includes(index)){
        lineThreeResults.push(index)
      } 
      if (lineThreeResults.length === wordArray.length){
        let goodWord3 = lineThreeResults.join("");
        output.push(goodWord3);
      }
    });
  }
  console.log(output)
}