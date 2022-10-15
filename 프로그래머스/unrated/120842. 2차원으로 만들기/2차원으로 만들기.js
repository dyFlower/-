function solution(num_list, n) {
    let temp = new Array(num_list.length / n)
    
    for(let i = 0; i < temp.length ; i++){
        temp[i] = new Array(n)
        for(let j = 0; j < n; j++){
            temp[i][j] = num_list[i*n +j]
        }
    }
    return temp;
}
    

