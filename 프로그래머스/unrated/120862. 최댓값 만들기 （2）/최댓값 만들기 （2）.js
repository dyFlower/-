function solution(numbers) {
    let temp = []
    numbers = numbers.sort((a,b)=>a-b)
    temp = [numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]].sort((a,b) => a-b)
    return temp[1];
}