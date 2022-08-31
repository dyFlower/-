function solution(n) {
    var answer = [];
    
    let a = n.toString();
    let b = a.split('');
    console.log(b)
    for(let i = 1; i < b.length + 1; i++){
        answer.push(parseInt(b[b.length - i]))
    }
    
    return answer;
}