function solution(n, m) {
    var answer = [];
    let k = m * n
    
    while(n !== 0 ){
        let a = Math.max(n, m)
        let b = Math.min(n, m)
        n = a % b
        m = b
    }
    answer.push(m, k / m)
    
    return answer;
}

/*유클리드 호제법 사용. 나머지와의 최대공약수를 구하면 그게 최대공약수이다.
그러므로 계속해서 나누다가 0이되면 나눈 수가 최대공약수.
최대공약수 * 최대공배수는 m * n인 것을 이용하면 쉽게 구할 수 있다.*/