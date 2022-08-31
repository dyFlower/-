function solution(num) {
    let num1 = num;
    var cnt = 0;

    
    for(let i = 0; i < 501; i++){
        if(num % 2 === 0){
            num = num / 2
        }else{
            num = num * 3 + 1
        }
        cnt++
        if(num === 1)
            break;
    }if(cnt === 501){
        cnt = -1
    }
    if(num1 === 1){
        cnt = 0
    }
    return cnt;
}