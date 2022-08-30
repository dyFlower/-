function solution(s) {
    var answer = '';
    let a = Math.floor(s.length / 2)
    if(s.length % 2 == 0)
        {answer = s[a - 1] + s[a]}
    else{
        answer = s[a]
        
    }
    return answer;
}