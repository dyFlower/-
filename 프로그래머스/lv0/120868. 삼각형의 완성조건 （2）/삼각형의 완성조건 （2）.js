function solution(sides) {
    return 2 * Math.min(...sides) - 1;
}

//Math.max(sides) - Math.min(sides) < x < Math.max(sides) + Math.mins(sides)