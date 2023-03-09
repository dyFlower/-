function solution(numbers, target) {
    let answer = 0;
    const n = numbers.length;
    function dfs(i, total) {
        if (i === n) {
            if (total === target) {
                answer++;
            }
            return;
        }
        dfs(i+1, total+numbers[i]);
        dfs(i+1, total-numbers[i]);
    }
    dfs(0, 0);
    return answer;
}