function isValidIP(str) {
    var alphabet ='asdfghjklizxcvbnmqwertyuıop\n';
    for(var i in alphabet){
        if(str.includes(alphabet[i])){
            return false;
        }
    }

    str.split('.');
    var array = str.split('.');
    for(var i in array){
        if (array[i].length>1 && array[i][0] == 0 || array[i].includes(' ') || array.includes('')){
            return false;
        }
    }
    var array2 =[];
    
    console.log(array);

    for(i=0;array.length>i;i++){
      array2.push(parseInt(array[i]));
    }
    

    for(var i in array2){
        if((array2.length !== 4) || (array2[i]<0) ||(array2[i]>255)){
            return false;
        }
        
        
    }

    return true;
    
    
  }






  console.log(isValidIP('21..140.206'), false);
 





  /*
  
  
  const net = require('net');
const isValidIP = (s) => net.isIP(s);








function isValidIP(str) {
  const octets = str.split('.')             // Split into octets
  return (octets.length === 4) &&           // Ensure str has exactly 4 octets
    octets.reduce((acc, octet) =>           // Check all octets
      (acc === true) &&                       // Ensure prior octets okay
      (String(Number(octet)) === octet) &&    // Ensure octet has nothing funky like spaces, leading 0's, ...
      (Number(octet) >= 0) &&                 // Ensure octet is 0 or more
      (Number(octet) <= 255)                  // Ensure octet is 255 or less
    , true)
}

  
  
  
  
  const isValidIP = str=> {
    let params = str.split('.');
    return params.length === 4 &&
        params.every(param=>Number(param) < 256 && String(Number(param)) === param);
};


  
  



function isValidIP(str) {
  var blocks = str.split(".");
  if(blocks.length === 4) {
    return blocks.every(function(block) {
      return block.indexOf(" ")==-1 && !isNaN(block) && parseInt(block,10) >=0 && parseInt(block,10) <= 255;
    });
  }
  return false;
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  */
  