function solution(numbers, direction) {
    var temp = [];
    temp = direction === 'right' ? numbers.unshift(numbers.pop()): numbers.push(numbers.shift())
    return numbers;
}