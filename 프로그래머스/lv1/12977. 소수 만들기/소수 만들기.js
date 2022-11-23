function solution(nums) {
    var answer = 0;
    let arr = new Array(3000).fill(true).fill(false, 0, 2);
    for(let i = 2 ; i * i <= 3000; i++){
        if(arr[i]){
            for(let j = i * i; j <= 3000; j+=i){
                arr[j] = false;
            }
        }
    }
    let primeArr = arr.map((v,i) => v ? i : 0).filter(v => v)
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                if(primeArr.includes(nums[i] + nums[j] + nums[k]))
                answer++
            }
        }
    }
    return answer

}