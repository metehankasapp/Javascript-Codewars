// bu programın amacı pangram bulma
// girilen cümlede alfabenin tümharfleri var mı onu kontrol ediyor eğer varsa true,yoksa false değerini döndürüyor.


function isPangram(string){
  var alphabet = 'abcdefghijklmnopqrstuwvxyz';
  var lwrCase = string.toLowerCase();
  for(i in alphabet){
    if(lwrCase.includes(alphabet[i])){
      i++;
      if(i == 26){
        
        return true;
        
      }
    }else{
      return false;
    }
    
    
  }

  
}


console.log(isPangram('Pack my box with five dozen liquor jugs'));





