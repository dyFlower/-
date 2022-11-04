function solution(ingredient) {
    let cnt = 0;
    let temp = []
    
    for(let i = 0; i < ingredient.length; i++){
        temp.push(ingredient[i])
        if(temp.slice(-4) == [1, 2, 3, 1].toString()){
            temp.splice(-4)
            cnt++
        }
    }
    return cnt;
}