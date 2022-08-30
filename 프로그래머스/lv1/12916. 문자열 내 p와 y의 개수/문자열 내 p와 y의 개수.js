function solution(s){
    var answer = true;
    
    let a = s.toLowerCase();
    let cntP = 0;
    let cntY = 0;
    
    for(let i = 0; i < a.length; i++){
        if (a[i] == 'p'){
            cntP++
        }else if(a[i] == 'y'){
            cntY++
        }
    }
    if(cntP !== cntY){
        answer = false
    }
    return answer;
}