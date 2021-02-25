function rot13(message){
    var listA=['a','b','c','d','e','f','g','h','i','j','k','l','m','A','B','C','D','E','F','G','H','I','J','K','L','M','1','2','3','4','5','6','7','8','9',' ','0','-','+','!','.'];
    var listB=['n','o','p','q','r','s','t','u','v','w','x','y','z','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9',' ','0','-','+','!','.'];
    var str='';
    for(var i in message){
        if(listA.indexOf(message[i]) == (-1)){
            str += listA[listB.indexOf(message[i])];
            
        }else{
            str += listB[listA.indexOf(message[i])];
            
        }     
    }
    return str;
  }




  console.log(rot13('ggbgbgbgbgb'));



  