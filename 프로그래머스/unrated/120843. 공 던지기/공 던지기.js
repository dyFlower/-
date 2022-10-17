function solution(numbers, k) {
    let index = 0;
    for(let i = 0; i < k - 1; i++){
        index += 2;
        index = index === numbers.length ? 0 : index === numbers.length + 1 ? 1 : index
    }
    return numbers[index];
}