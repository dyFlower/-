function solution(my_string) {
    var answer = '';
    my_string.split('').forEach(n => answer += n == n.toUpperCase()? n.toLowerCase() : n.toUpperCase())
    return answer
}