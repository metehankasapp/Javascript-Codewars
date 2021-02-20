





function humanReadable(seconds) {


    var second = seconds%60;
    var minute = ((seconds -second) / 60);
    var hour =  (minute - (minute % 60)) / 60;
    var nMinute = minute%60;
    
    for(let  i=0;i<=5;i++){

        var time ='00:00:00';

        if(seconds == 0 ){
            return time;
        }else{
            if( hour == 0){
                hour = '00';
            }else if(hour.toString().length == 2){
                hour = hour.toString();

            }else if(typeof hour != "string"){
                hour = `0${hour}`;
                
            }

            if( nMinute == 0){
                nMinute = '00';
            }else if(nMinute.toString().length == 2){
                nMinute = nMinute.toString();

            }else if(typeof nMinute != "string"){
                nMinute = `0${nMinute}`;
                
            }

            if( second == 0){
                second = '00';
            }else if(second.toString().length == 2){
                second = second.toString();

            }else if(typeof second != "string"){
                second = `0${second}`;
                
            }

            return `${hour}:${nMinute}:${second}`;
            
        }   
    }
  }






console.log(humanReadable(86399));


