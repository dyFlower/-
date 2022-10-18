function solution(numlist, n) {
    var answer = [];
    numlist = numlist.sort((a,b) => b-a)
    let closeNum = [...numlist].map(v => Math.abs(v - n))
    for(i in numlist){
        answer.push(numlist[closeNum.indexOf(Math.min(...closeNum))])
        closeNum[closeNum.indexOf(Math.min(...closeNum))] = 100000
    }
    return answer;
}