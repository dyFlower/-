function solution(s1, s2) {
    var answer = 0;
    for(i of s1){
        if(s2.includes(i)){answer++}
    }
    return answer;
}