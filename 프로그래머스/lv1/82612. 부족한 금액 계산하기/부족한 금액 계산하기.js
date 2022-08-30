function solution(price, money, count) {
    var answer = 0;
    let fee = 0;
    let allFee = 0;
    
    for(let i = 0; i < count; i++){
        fee += price;
        allFee += fee;
    }
    answer = allFee - money
    //아!!! money가 allFee보다 많을 경우 0을 return 해주어야 한다!!
    if(allFee < money)
        answer = 0

    return answer;
}