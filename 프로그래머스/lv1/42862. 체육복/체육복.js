function solution(n, lost, reserve) {
    let student = new Array(n)
    let cntL = 0;
    //'l','r','y'

    for(let i = 0; i < reserve.length; i++){
        student[reserve[i] - 1] = 'r'
    }
    for(let i = 0; i < lost.length; i++){
        if(student[lost[i] - 1] === 'r'){
            student[lost[i] - 1] = 'y'
        }else{
        student[lost[i] - 1] = 'l'}
    }
    for(let i = 0; i < student.length; i++){
        if(student[i] === 'l'){
            if(student[i - 1] === 'r'){
                student[i] = 'y'
                student[i - 1] = 'y'
            }
            else if(student[i + 1] === 'r'){
                student[i] = 'y'
                student[i + 1] = 'y'
            }
        }
    }
    
    for(let i = 0; i < student.length; i++){
        if(student[i] === 'l'){
            cntL++
        }
    }
    return n - cntL;
}