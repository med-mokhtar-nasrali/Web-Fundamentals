function minToFront(arr){

    var Min = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i]< Min){
            Min = arr[i];
        }

    }
    return arr;

}
minToFront([4,2,1,3,5]);
