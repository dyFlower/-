function solution(i, j, k) {
    return new Array(j-i+1).fill(0).map((v,a)=> v+a+i).join('').split('').map(Number).filter(n => n === k).length
}