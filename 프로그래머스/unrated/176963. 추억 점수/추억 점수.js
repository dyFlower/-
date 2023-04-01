function solution(name, yearning, photo) {
    const answer = [];
    const score = new Map();
    for(let i = 0; i < name.length; i++){
        score[name[i]] = yearning[i]
    }
    for(let i = 0; i < photo.length; i++){
        answer.push(photo[i].map(v => score[v]).filter(v => v !== undefined).reduce((acc, v) => acc + v, 0))
    }
    return answer;
}