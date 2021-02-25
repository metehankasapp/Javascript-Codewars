function iqTest(numbers){
    var list= numbers.split(' ');
    var odds=[];
    var evens=[];
    
    for(var i in list){
        if(Number(list[i]) % 2 ==0){odds.push(Number(list[i]));}
        else{evens.push(Number(list[i]));}
    }
    if(evens.length==1){return (list.indexOf(String(evens[0]))+1);}else{
        return (list.indexOf(String(odds[0]))) + 1;
    };
    
    
  }



  console.log(iqTest("2 4 7 8 10"));
  console.log(iqTest("1 2  1"));