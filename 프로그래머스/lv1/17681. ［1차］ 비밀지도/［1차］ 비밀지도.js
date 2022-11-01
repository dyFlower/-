function solution(n, arr1, arr2) {
    arr1 = arr1.map(v => v.toString(2).padStart(n,0))
    arr2 = arr2.map(v => v.toString(2).padStart(n,0))
    let arr3 = new Array(n).fill('')
    for(let i in arr1){
        for(let j in arr1[i]){
            if(arr1[i][j] | arr2[i][j] == 1){
                arr3[i] += '#'
            }else{arr3[i] += ' '}
        }
    }
    return arr3;
}