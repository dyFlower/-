function solution(balls, share) {
    function factorial(num){
        if (num === 1){
            return 1n
        }else{
            return BigInt(num) * BigInt(factorial(num - 1))
        }
    }
    if(balls - share === 0){
        return 1
    }
    return factorial(balls) / factorial(balls-share) / factorial(share);
}

//못 풀게따,, 이 문제,,,