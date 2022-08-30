function solution(s) {
    var answer = '';
    let a = s.split('').sort()
    
    for(let i = 0; i < s.length; i++){
        answer += a[a.length - 1 - i]
    }
    
    return answer;
}