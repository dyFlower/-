function solution(my_str, n) {
    var answer = [];
    my_str = my_str.split('')
    
    for(let i = 0; i < my_str.length / n; i++){
        answer.push(my_str.slice(i * n, (i+1)*n).join(''))
    }
    return answer;
}