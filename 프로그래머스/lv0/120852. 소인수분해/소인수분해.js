function solution(n) {
    var answer = [];
    let i = 2
    while(i <= n){
        while(n % i === 0){
            n = n / i
            answer.push(i)
              }
        i++
    }
    return [...new Set(answer)];
}