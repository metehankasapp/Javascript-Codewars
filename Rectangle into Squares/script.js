function sqInRect(lng, wdth){
    if(lng == wdth){
        return null;
    }

    var result =[];

    while (wdth !== lng){
       
        if(wdth>lng){
            wdth -= lng;
            result.push(lng);
        }else if(lng>wdth){
            lng -=wdth;
            result.push(wdth);
        }
    }

    result.push(wdth);



    return result;

    
  }







  console.log(sqInRect(5,3));




