T = int(input())

for test_case in range(1, T + 1):
    word = input()
    answer = 1
    for i in range(len(word)//2):
        if word[i] != word[-i-1]:
            answer = 0;
            break;
    print('#'+str(test_case), answer)