function solution(survey, choices) {
    var answer = '';
    let surScore = {R : 0, T : 0, C : 0, F : 0, J : 0, M : 0, A : 0,
                    N : 0}
    let tmp = [];
    
    choices.forEach((choice, i, a) => a[i] -= 4)
    
    survey.forEach((mbti, i, a) => {
        tmp = a[i].split('');
        surScore[tmp[1]] += choices[i]})
    
    answer += surScore.T > surScore.R ? 'T' : 'R'
    answer += surScore.F > surScore.C ? 'F' : 'C'
    answer += surScore.M > surScore.J ? 'M' : 'J'
    answer += surScore.N > surScore.A ? 'N' : 'A'
    
    return answer;
}

    // for(let i = 0; i < choices.length; i++){
    //     choices[i] -= 4
    // }

    // for(let i = 0; i < survey.length; i++){
    //     box = survey[i].split('')
    //     surScore[box[1]] += choices[i]
    // }

// 변수명 box -> tmp로 수정
// 삼항 연산자 구문 좀 더 짧게 수정