T = int(input())

def check(a,b) :
    if a > b : return '>'
    elif a < b : return '<'
    elif a == b : return '='

for test_case in range(1, T + 1):
    [a, b] = list(map(int, input().split()))
    print('#' + str(test_case), check(a, b))