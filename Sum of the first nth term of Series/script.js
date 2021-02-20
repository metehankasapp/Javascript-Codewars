function SeriesSum(n){
    if(n == 0){
        return String('0.00');
    }else{
        var toplam = 1;
        var P = 1
        for(let i = 0; i<n;i++){
            
            P+=3;
            toplam += 1/P;
            
            sonToplam = toplam -(1/P);
            sonToplam = sonToplam.toFixed(2);            
        }
        
        
    }

    
    
    return(sonToplam);
    
}

console.log(SeriesSum(5));


