function solution(arr) {
    let a;
    let b;
    
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            a = arr[0];
        }else{
            if(arr[i] < a){
                a = arr[i];
                b = i;
            }
        }
    }arr.splice(b , 1);
    
    if(arr.length === 0)
        {arr.push(-1)}
    
    return arr;
}