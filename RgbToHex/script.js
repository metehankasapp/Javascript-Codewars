function rgb(r, g, b){
    var sixteeen = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var str ='';

    if(r>255){
        str+='FF';
    }else if(r<0){
        str +='00';
    }else{
        str += sixteeen[Math.floor(r/16)];
        str += sixteeen[r%16];
    }
    if(g>255){
        str+='FF';
    }else if(g<0){
        str +='00';
    }else{
        str += sixteeen[Math.floor(g/16)];
        str += sixteeen[g%16];
    }
    if(b>255){
        str+='FF';
    }else if(b<0){
        str +='00';
    }else{
        str += sixteeen[Math.floor(b/16)];
        str += sixteeen[b%16];
    }
    
    return str;
  }





  console.log(rgb(0,0,-20));











