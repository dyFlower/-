process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //5
    //3
    var answer = "";
    
    for(var i = 0; i < b; i++){
        for(var j = 0; j < a; j++){
            answer += '*';
        }
        answer += '\n';
        
    }console.log(answer)
});