function solution(num, total) {
    let temp = new Array(num).fill(1).map((v, i)=> v+i)
    let sum = temp.reduce((acc,r)=>acc+r)
    while(sum !== total){
        temp = sum < total ? temp.map(v => v + 1) : temp.map(v => v - 1) 
        sum = temp.reduce((acc,r)=>acc+r)
    }
    return temp;
}