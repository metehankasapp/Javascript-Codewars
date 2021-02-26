
/*

function formatDuration (seconds) {
    var str ='';
    var lastSecond = 0;
    lastSecond= seconds;
    let year = 31536000;
    let day = 86400;
    var hour= 3600;
    var list =[];

    if(seconds/year >=1){
        list.push(`${String(Math.floor(seconds/year))} year`);
        lastSecond = seconds - (year*Math.floor(seconds/year));
    }
    if(lastSecond/day >= 1){
        list.push(`${String(Math.floor(lastSecond/day))} day`);
        lastSecond=lastSecond-(day*Math.floor(lastSecond/day));
    }
    if(lastSecond/hour >= 1){
        list.push(`${String(Math.floor(lastSecond/hour))} hour`);
        lastSecond=lastSecond-(hour*Math.floor(lastSecond/hour));
    }
    if(lastSecond/60 >= 1){
        list.push(`${String(Math.floor(lastSecond/60))} minute`);
        lastSecond=lastSecond-(Math.floor(lastSecond/60)*60);
       
    }
    if(lastSecond>0 ){
        list.push(`${lastSecond} second`);
    }
    for(var i in list){
        if(list.length==1){
            if(list[i][0]==1){
                return list[i];
            }else{
                return list[i]+'s';
            }
        }else{
            list[i-1] += 's, ';
        }
    }
    list[list.length-2] =list[list.length-2].replace(',',' and');
    list[list.length-1] +='s';
    var a = list.join('')
    return a;
  }
  



  console.log(formatDuration(121));
  console.log(formatDuration(3661));
  console.log(formatDuration(1000000));






*/




  
  function formatDuration (seconds) {
  if ( seconds === 0 ) return 'now' ;
  var typeArr = ['year','day','hour','minute','second'] ;
  var sec = 0 ;
  var minute = 0 ;
  var hour = 0 ;
  var day = 0 ;
  var year = 0 ;
  minute = Math.floor(seconds / 60) ;
  sec = seconds % 60 ;
  
  hour = Math.floor(minute / 60) ;
  minute = minute % 60 ;
  
  day = Math.floor(hour / 24) ;
  hour = hour % 24 ;
  
  year = Math.floor(day / 365) ;
  day = day % 365 ;
  
  var resultArr = [year,day,hour,minute,sec] ;
  var resultStrArr = [] ;
  for ( var i = 0 ; i < resultArr.length ; i ++ ){
    if ( resultArr[i] === 1 ){
      resultStrArr.push(resultArr[i]+' ' + typeArr[i]) ;
    } else if ( resultArr[i] >= 2 ){
      resultStrArr.push(resultArr[i]+' ' + typeArr[i]+'s') ;
    }
  }
  var resultStr = '' ;
  for ( var i = 0 ; i < resultStrArr.length ; i ++ ){
    if ( i === resultStrArr.length - 2 ){
      resultStr += resultStrArr[i] + ' and ' + resultStrArr[i+1] ;
      break ;
    }
    if ( i !== resultStrArr.length -1 ){
      resultStr += resultStrArr[i] + ', ' ;
    } else {
      resultStr += resultStrArr[i];
    }
  }
  return resultStr ;
}

console.log(formatDuration(125564251));