function solution(food) {
    let temp = []
    food.forEach((v,i) => {
        temp.push((i).toString().repeat(Math.floor(v/2)))
    })
    return temp.join('') + '0' + temp.reverse().join('');
}