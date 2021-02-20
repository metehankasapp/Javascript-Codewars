












function accum(s) {

    var string2 = s.toLowerCase();


    last = '';

    for(var i = 0;i<string2.length;i++){
        for(var a = 0;a<=i;a++){
            last += string2[i];   
        }
        last += '-';    
    }

    var lastOfUs = last.split('-');
    var lastOfUs1 = lastOfUs.pop();
    var sentence = new Array();

    for(var b=0;b<lastOfUs.length;b+=1){
        var word = lastOfUs[b];
        sentence.push(word[b].toUpperCase() + word.slice(1)) ;
        
    }

    lst = '';
    for(var i in sentence){
        lst += sentence[i] + '-';    
    }
    lst1= lst.slice(0,-1);
    return lst1;
}



console.log(accum('asdasd'));







    
        

    /*

    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"


    Programın amacı girilen değeri her tur sonuna '-' ekleyerek bir sonraki tur kadar o harfi yazdırması
    ilk önce kaç tür dönmen gerektiğini yaz.
    ilk bir tanesi için örnek yap ve ekleyerek devam et.




    */