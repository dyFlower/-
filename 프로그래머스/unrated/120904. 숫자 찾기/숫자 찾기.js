function solution(num, k) {
    var answer = num.toString().split('').map(Number).indexOf(k)
    return answer != -1 ? answer + 1 : -1
}