function solution(today, terms, privacies) {
    var answer = [];
    const term = {};
    const endDate = []
    terms.forEach(v => {const item = v.split(' ');
                        term[item[0]] = item[1] * 28;
                        });
    const day = today.split('.').map(Number)
    const todayDate = day[0] * 12 * 28 + day[1] * 28 + day[2]
    const privacy = privacies.map(v => v.split(' '))
    const privacyDate = privacy.map(v => v[0].split('.').map(Number))
    for(let i = 0; i < privacyDate.length; i++){
        privacy[i][0] = parseInt(privacyDate[i][0]) * 12 * 28 + parseInt(privacyDate[i][1]) * 28 + parseInt(privacyDate[i][2])
        endDate.push(privacy[i][0] + term[privacy[i][1]] - 1)
        
        if(todayDate > endDate[i]){
            answer.push(i + 1)
        }
    }
    return answer;
}