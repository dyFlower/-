function solution(n) {
    var answer = '';
    
    let a = n.toString();
    let b = a.split('');
    let c = b.sort();
    
    for(let i = 1; i <= c.length; i++){
        answer += c[c.length - i];
    }
    return parseInt(answer);
}