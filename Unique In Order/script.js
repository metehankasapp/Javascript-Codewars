

//programın amacı yanyana girilen değerleri yazmadan ,dizzede sadece eşsiz karakterli değerlreri döndürmsidir.








var list = ['a','b','c','d','d','c','C'];


function uniqueInOrder(list){
    
    var newList = [];


for(i=0; i<=list.length;i++){

    if(list[i] != list[i+1]){
        newList.push(list[i]);
        
    }
    else if(list[i] == list[i+1]){
        continue;
    }


}

    return newList;


}


console.log(uniqueInOrder(['A', 'B','B', 'C', 'c', 'A', 'D']));









