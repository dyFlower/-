function solution(n)
{
    var answer = 0;
    let a = n.toString();
    let b = a.split('');
    
    for(let i = 0; i < b.length; i++){
        var c = parseInt(b[i]);
        answer += c
    }
    return answer;
}