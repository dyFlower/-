function solution(cipher, code) {
    var answer = '';
    cipher = cipher.split('')
    for(let i = 1; i <= cipher.length / code ; i++){
        answer += cipher[code * i - 1]
    }
    return answer;
}