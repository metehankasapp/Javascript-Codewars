function bouncingBall(h,bounce,window) {
    
    if ((h>0) && (0<bounce) && (1>bounce) && (window<h)){
        
        var total = 1;

        for(var i = 0;window<h;i++){
             var afterTour = h*bounce;
             h = afterTour;
             total +=2;
        }
    }else{
        return -1;
    }

    return(total-2)
  }





  console.log(bouncingBall(30,0.66,1.5));






