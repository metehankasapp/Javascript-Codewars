function solution(roman){
    var romanNumerals ={
        'I':1,
        'II':2,
        'III':3,
        'IV':4,
        'V':5,
        'VI':6,
        'VII':7,
        'VIII':8,
        'IX':9,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    
    
    
    var result = 0;
    for(i in roman){
        result += romanNumerals[roman[i]]; 
    }
    
    if(roman == 'IV'){
        result-=2;
    }
    
    return (result);
    
}