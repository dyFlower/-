function solution(num_list) {
    const multiply = num_list.reduce((acc, v) => acc * v);
    const square = num_list.reduce((acc, v) => acc + v) ** 2;
    return multiply > square ? 0 : 1;
}