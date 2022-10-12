function solution(n) {
    var answer = new Array(n)
    for(let i = 1; i <= n; i++){
        answer[i] =i
    }
    return answer.filter(n => n%2 != 0);
}