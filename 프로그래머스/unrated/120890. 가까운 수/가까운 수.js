function solution(array, n) {
    let temp = array.sort((a,b)=>a-b).map(v => Math.abs(v - n))
    return array[temp.indexOf(Math.min(...temp))];
}

//sort를 안해줘서 음수일 경우 테스트케이스에서 오류가 생김.