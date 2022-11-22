function solution(number, limit, power) {
  const arr = new Array(number).fill(1).map((v, i) => v + i);
  const newArr = arr.map((v) => {
    let cnt = 0;
    for (let j = 1; j <= Math.sqrt(v); j++) {
      if (v % j === 0) {cnt++;}
    }if(Math.sqrt(v) == Math.floor(Math.sqrt(v))){
        cnt = 2 * cnt - 1
    }else{cnt = 2 * cnt}
    if (cnt > limit) {return power;}
    else {return cnt;}
  });
  return newArr.reduce((acc, c) => acc + c);
}