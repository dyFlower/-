function solution(N, stages) {
    var answer = [];
    let numPeople = stages.length;
    let stagePeople = 0;
    let fail = []
    
    for(let i = 1; i <= N ; i++){
        if(numPeople == 0){
            fail.push(0)
            continue
        }
        stagePeople = stages.filter(v => v == i).length;
        fail.push(stagePeople / numPeople);
        numPeople -= stagePeople
    }
    for(let i = 0; i < N ; i++){
        answer.push(fail.indexOf(Math.max(...fail))+1)
        fail[fail.indexOf(Math.max(...fail))] = -1
    }
    return answer;
}