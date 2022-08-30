function solution(lottos, win_nums) {
    var answer = [];
    let cntWin = 0;
    let cntZero = 0;
    let cntMin = 0;
    
    for(let i = 0; i < 6; i++){
        if(lottos[i] === 0){
            cntZero++
        }
        for(let j = 0; j < 6; j++){
            if(lottos[i] === win_nums[j])
               {cntWin++;}
        }
    }
    cntMax = cntZero + cntWin;
    
//최고 등수
    switch(cntMax){
        case 0:
            answer.push(6)
            break;
        case 1:
            answer.push(6)
            break;
        case 2:
            answer.push(5)
            break;
        case 3:
            answer.push(4)
            break;
        case 4:
            answer.push(3)
            break;
        case 5:
            answer.push(2)
            break;
        case 6:
            answer.push(1)
            break;
    }

//최저 등수
    
    switch(cntWin){
        case 0:
            answer.push(6)
            break;
        case 1:
            answer.push(6)
            break;
        case 2:
            answer.push(5)
            break;
        case 3:
            answer.push(4)
            break;
        case 4:
            answer.push(3)
            break;
        case 5:
            answer.push(2)
            break;
        case 6:
            answer.push(1)
            break;
    }
    
    return answer;
}