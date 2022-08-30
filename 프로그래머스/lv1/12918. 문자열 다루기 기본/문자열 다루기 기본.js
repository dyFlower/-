function solution(s) {
    var answer = true;
    let a = s.split('').map(Number);
    
    if(s.length !== 4 && s.length !== 6){
        answer = false;
    }
    
    for(let i = 0; i < a.length; i++){
        if(isNaN(a[i]))
            {answer = false;}
        if(a[i] == 'e'){
        answer = false;
        }
    }
    return answer;
}