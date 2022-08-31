function solution(phone_number) {
    var answer = '';
    
    for(let i = 4; i < phone_number.length; i++){
        answer += '*'
    }
    let b = phone_number.slice(-4)
    
    return answer + b;
}