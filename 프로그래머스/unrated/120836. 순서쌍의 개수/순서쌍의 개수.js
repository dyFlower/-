function solution(n) {
    return new Array(n).fill(1).map((v,i) => n % (v+i)).filter(v => v ==0).length;
}