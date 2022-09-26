function solution(survey, choices) {
    var answer = '';
    let surScore = {R : 0, T : 0, C : 0, F : 0, J : 0, M : 0, A : 0,
                    N : 0}
    let box = [];
    
    choices.forEach((choice, i, a) => a[i] -= 4)
    
    survey.forEach((mbti, i, a) => {
        box = a[i].split('');
        surScore[box[1]] += choices[i]})
    
    surScore.T > surScore.R ? answer+='T' : answer+='R'
    surScore.F > surScore.C ? answer+='F' : answer+='C'
    surScore.M > surScore.J ? answer+='M' : answer+='J'
    surScore.N > surScore.A ? answer+='N' : answer+='A'
    
    return answer;
}

    // for(let i = 0; i < choices.length; i++){
    //     choices[i] -= 4
    // }

    // for(let i = 0; i < survey.length; i++){
    //     box = survey[i].split('')
    //     surScore[box[1]] += choices[i]
    // }