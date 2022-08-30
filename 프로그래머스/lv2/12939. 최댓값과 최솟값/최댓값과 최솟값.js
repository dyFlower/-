function solution(s) {
    var answer = '';
    let box = s.split(" ").map(Number)
    answer = Math.min(...box) + " " + Math.max(...box)
    
    return answer;
}