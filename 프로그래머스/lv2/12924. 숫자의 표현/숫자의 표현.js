function solution(n) {
    let sum = 0;
    let cnt = 0;
    
    for(let i = 0; i < n ; i++){    
        sum = 0;
        for(let j = i + 1; j <= n; j++){
            sum += j
            if(sum == n){
                cnt++
            }else if(sum > n){
                break;
            }
        }
    }
    return cnt;
}