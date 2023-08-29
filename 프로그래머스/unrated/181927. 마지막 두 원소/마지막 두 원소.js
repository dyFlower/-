function solution(num_list) {
    var answer = [];
    answer.push(...num_list)
    const arrayLength = num_list.length;
    const A = num_list[arrayLength - 2];
    const B = num_list[arrayLength - 1];
    A < B ? answer.push(B - A) :  answer.push(B * 2);
    
    return answer;
}