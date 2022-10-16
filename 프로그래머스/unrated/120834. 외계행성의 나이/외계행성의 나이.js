function solution(age) {
    var answer = '';
    let temp = 'abcdefghij'.split('')
    age = age.toString().split('')
    for(i in age){
        answer += temp[age[i]]
    }
    return answer;
}