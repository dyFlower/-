function solution(array) {
    var answer = 0;
    let temp = {}
    let cnt = 0;
    for(i in array){
        temp[array[i]] = 0
    }
    for(i in array){
        temp[array[i]] += 1
    }
    let maxCnt = Math.max(...Object.values(temp))
    for(i of Object.values(temp)){
        if(maxCnt === i){
            cnt++}
    }
    if(cnt > 1){
        answer = -1
    }else{
        answer = Object.keys(temp)[Object.values(temp).indexOf(maxCnt)]
    }
    console.log(Object.keys(temp))
    console.log(Object.values(temp))
    console.log(maxCnt)
    console.log(temp)
    return +answer;
}