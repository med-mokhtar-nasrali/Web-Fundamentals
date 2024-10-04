/////////// 1 

for(var i = 0 ; i <= 20 ; i++){
        if(i % 3 == 0){
            console.log(i)
        }
}



/////////// 2

for(var i = 100 ; i >= 0 ; i-- ){
    if(i%3 == 0)
        console.log(i)
}


/////////// 3

for(var i = 4 ; i >= -3.5 ; i-=1.5){
    console.log(i)
}


/////////// 3
function sumOf(){
    var sum = 0;
    for(var i = 0 ; i <=100 ;i++){
        sum+=i;
    } return sum
    }
    console.log(sumOf())

/////////// 3
function multiply(){
    var product = 1;
    for(var i = 1 ; i <= 12 ; i++){
        product *= i ;
    }
    return product
}
console.log(multiply());


