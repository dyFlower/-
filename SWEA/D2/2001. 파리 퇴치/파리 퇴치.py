T = int(input())

for test_case in range(1, T + 1):
    [map_size, attack_size] = list(map(int, input().split()))
    zone = []
    paris = []
    # 지도생성
    for i in range(map_size):
        zone.append(list(map(int, input().split())))

    for j in range(map_size - attack_size + 1):
        paris_part = 0
        for k in range(map_size - attack_size + 1):
            for t in range(attack_size):
                for m in range(attack_size):
                    paris_part += zone[j+t][k+m]
            paris.append(paris_part)
            paris_part = 0

    print('#'+ str(test_case), max(paris))
