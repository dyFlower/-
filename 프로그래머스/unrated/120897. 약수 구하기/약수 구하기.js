function solution(n) {
    return new Array(n).fill(1).map((n,i)=> n+i).filter(v => n % v === 0)
}