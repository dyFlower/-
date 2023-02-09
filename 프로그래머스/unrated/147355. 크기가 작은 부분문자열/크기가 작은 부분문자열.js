function solution(t, p) {
    let result = 0;
    for(let i = 0; i < t.length - p.length + 1; i++){
        parseInt(t.substring(i,p.length+i)) <= p ?  result++ : '';
    }
    return result;
}