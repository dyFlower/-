function solution(array) {
    let temp = {}
    let cnt = 0;
    
    for(i in array){
        temp[array[i]] = array.filter(v => v === array[i]).length
    }
    let maxCnt = Math.max(...Object.values(temp))
    for(i of Object.values(temp)){
        if(maxCnt === i){
            cnt++}
    }
    if(cnt > 1){
        return -1
    }else{
        return +Object.keys(temp)[Object.values(temp).indexOf(maxCnt)]
    }
}

    // console.log(Object.keys(temp))
    // console.log(Object.values(temp))
    // console.log(maxCnt)
    // console.log(temp)

//맵을 활용해서 풀어보자..!

    // let temp = new Map();

    // for(i of array){
    //     temp.set(i , (temp.get(i) || 0) + 1)
    // }
    // temp = [...temp]
    // console.log(temp)
//sort를 인덱스별로 할 수 있다!!
//객체 초기화에서 필터를 쓰면 줄이 줄어드네요~~