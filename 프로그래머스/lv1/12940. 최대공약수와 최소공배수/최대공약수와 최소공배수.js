function solution(n, m) {
    var answer = [];
    let k = m * n
    
    while(n !== 0 ){
        let a = Math.max(n, m)
        let b = Math.min(n, m)
        n = a % b
        m = b
    }
    answer.push(m)
    answer.push(k / m)
    
    return answer;
}