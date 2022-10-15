function solution(my_string, num1, num2) {
    let temp = []
    my_string = my_string.split('')
    temp = my_string[num1]
    my_string[num1] = my_string[num2]
    my_string[num2] = temp
    return my_string.join('')
}