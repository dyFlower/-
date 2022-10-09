function solution(board, moves) {
    var answer = 0;
    let temp = [];
    
    for(let i in moves){
        for(let j in board){
            if(board[j][moves[i] - 1] !== 0){
                temp.push(board[j][moves[i] - 1])
                board[j][moves[i] - 1] = 0
                break;
            }
        }
        for(let k in temp){
            if(temp[temp.length - 1] == temp[temp.length - 2]){
                temp.pop(temp)
                temp.pop(temp)
                answer += 2
            }
        }
    }
    return answer;
}