function solution(a, b, n) {
    var answer = 0;
    let 남은콜라수 = n
    let 받는콜라수 = 0
    
    while(남은콜라수 >= a){
        받는콜라수 = Math.floor(남은콜라수 / a) * b
        남은콜라수 = 남은콜라수 % a + 받는콜라수
        answer += 받는콜라수
    }
    
    return answer;
}