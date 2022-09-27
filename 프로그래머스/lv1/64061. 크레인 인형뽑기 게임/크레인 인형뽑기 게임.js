function solution(board, moves) {
    var answer = 0;
    let box = [];
    
    for(let i = 0; i < moves.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[j][moves[i] - 1] !== 0){
                box.push(board[j][moves[i] - 1])
                board[j][moves[i] - 1] = 0
                break;
            }
        }
        for(let k = 0; k < box.length ; k++){
            if(box[box.length - 1] == box[box.length - 2]){
                box.pop(box)
                box.pop(box)
                answer += 2
            }
        }
    }
    return answer;
}