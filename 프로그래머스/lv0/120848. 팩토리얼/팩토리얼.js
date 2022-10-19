function solution(n) {
    var answer = 1;
    function factorial(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factorial(num - 1));
        }
    }
    while(factorial(answer) <= n){
        answer++
    }
    return answer - 1;
}