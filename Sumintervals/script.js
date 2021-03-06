function sumIntervals(intervals) {
    list = [];

    for (var i in intervals) {
        number1 = intervals[i][0];
        number2 = intervals[i][1] - 1;
        


        for (var a = number1; number1 <= number2; number2 -= 1) {
            if(list.includes(number2)){
                continue;
            }else{
                list.push(number2);
            }
        }

        
    }

    list.sort(function(a, b){return a-b});
    return list.length;


}




console.log(sumIntervals([
    [1, 5],
    [2, 6]
]));