/*

var str = "HELLO WORLD";
var n = str.charCodeAt(0);

bunun amacı stringin içinden 0 indexli karakterin unicodunu yazmasıdır.

*/ 




/*


function myFunction() {
  var res = String.fromCharCode(7);
  document.getElementById("demo").innerHTML = res;
}

bu fonksiyonun amacı res içine yazılan 7 değerindeki unicodun karşılğığ olan karakteri veya harfi göstermesidir.

 */















 /*

function findMissingLetter(letters) {
    for (var i = 0; i < letters.length; i++) {
      if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
        return String.fromCharCode(letters[i].charCodeAt() + 1);
      }
    }
  }


console.log(findMissingLetter(['c','a']));

*/









function findMissingLetter(array){
    for(var i=0;i<array.length;i++){
        if((array[i].charCodeAt() + 1) !== (array[i+1].charCodeAt())){
            return String.fromCharCode(array[i].charCodeAt() + 1);
        }
    }
}



console.log(findMissingLetter(['a','b','d']));











