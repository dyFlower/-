function solution(denum1, num1, denum2, num2) {
    var answer = [];
    let temp = []
    answer[0] = denum1 * num2 + denum2 * num1
    answer[1] =  num1 * num2
    for(let i = 1; i <= Math.min(answer[0],answer[1]); i++){
        if(answer[0] % i === 0 && answer[1] % i === 0){
            temp.push(i)
        }
    }
    return answer.map(v => v / Math.max(...temp));
}