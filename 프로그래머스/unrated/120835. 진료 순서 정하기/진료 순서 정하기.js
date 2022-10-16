function solution(emergency) {
    let temp = [...emergency].sort((a,b)=>b-a)
    for(i in emergency){
        emergency[i] = temp.indexOf(emergency[i]) + 1
    }
    return emergency;
}