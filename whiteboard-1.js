/* 
  See prompt at https://leetcode.com/problems/keyboard-row/
*/

let input = ["Hello", "Alaska", "Dad", "Peace", "type", "pretty", "reap", "Mom", "repeat", "shall", "Pewtiepie"];
let output = [];

const lineOne = ["q","w","e","r","t","y","u","i","o","p"];
const lineTwo = ["a","s","d","f","g","h","j","k","l"];
const lineThree = ["z","x","c","v","b","n","m"];

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
      if (lineOne.includes(index.toLowerCase())){
        lineOneResults.push(index)
      } 
      if (lineOneResults.length === wordArray.length){
        var googWord1 =  lineOneResults.join("");
        output.push(googWord1);
      }
  
      if (lineTwo.includes(index.toLowerCase())){
        lineTwoResults.push(index)
      } 
      if (lineTwoResults.length === wordArray.length){
        var goodWord2 = lineTwoResults.join("");
        output.push(goodWord2);
      }
  
      if (lineThree.includes(index.toLowerCase())){
        lineThreeResults.push(index)
      } 
      if (lineThreeResults.length === wordArray.length){
        let goodWord3 = lineThreeResults.join("");
        output.push(goodWord3);
      }
    });
  }
  console.log(output);
}