function solution(x) {
    var answer = true;
    let a = x.toString();
    let b = a.split('').map(Number);
    let box = 0;
    
    for(let i = 0; i < b.length; i++){
        box += b[i]
    }
    if(x % box !== 0){
        answer = false;
    }
    return answer;
}