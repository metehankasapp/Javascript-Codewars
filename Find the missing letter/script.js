


function findMissingLetter(array){
    for(var i=0;i<array.length;i++){
        if((array[i].charCodeAt() + 1) !== (array[i+1].charCodeAt())){
            return String.fromCharCode(array[i].charCodeAt() + 1);
        }
    }
}



console.log(findMissingLetter(['a','b','d']));











