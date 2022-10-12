function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n / 2; i++) {
        answer += 2 * i;
    }
    return answer;
}
