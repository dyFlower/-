//공부 다시! 아니 문제가 이상해,,
function solution(polynomial) {
    var answer = 0;
    let temp = 0;
    polynomial = polynomial.split(' ').filter(v => v !== '+')
    for(i of polynomial){
        if(i === 'x'){
            temp += 1}
        else if(i[i.length - 1] === 'x'){
            temp += +i.substr(0, i.length - 1)}
        else{answer += +i}
    }
        if(temp === 1){
            if(answer === 0){
                return 'x'
            }
        return `x + ${answer}`
    }
    answer = temp === 0 ? answer : answer === 0 ? temp + 'x' : `${temp}x + ${answer}` 
                        
    return answer.toString();
}