
function hasOddNumber(arr) {
    return arr.some(function(val){
        return val % 2 !== 0
    })
}



function hasAZero(num) {
    return num.toString().split(``).some(function(val){
        return val === `0`;
    })
}


function hasOnlyOddNumbers(arr) {
    return arr.every(function(x){
        return x % 2 !== 0
    })
}



function hasNoDuplicates(arr) {
    return arr.every(function(dup){
        return arr.indexOf(dup) === arr.lastIndexOf(dup);
    });
}



function hasCertainKey(arr, key) {
    return arr.every(function(x){
        return key in x
    });
}



function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(xi){
        return xi[key] === searchValue;
    })
}
