






function wave(str){
    var strUpper = str.toUpperCase();
    array=[];
    array1=[];
    for(var i in str){
        array.push(str);  
    }
    
    for(var b in array){
        if (array[b] == ' '){
            continue;
        }else{
            var lst = array[b].replace(`${array[b][b]}`,`${strUpper[b]}`); 

            array1.push(lst);
            
        }
        
        
    }
    return array1;
  }


console.log(wave('wu yuh ft '));






