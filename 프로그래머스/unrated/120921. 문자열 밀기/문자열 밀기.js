function solution(A, B) {
    var answer = 0;
    A = A.split('')

    for(i in A){
        if(A.join('') === B){
            break;
        }
        A.unshift(A[A.length - 1])
        A.pop(A[A.length - 1])
        answer++
    }
    return answer === A.length ? -1 : answer;
}