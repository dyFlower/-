function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    const q = [[0, 0]];
    const dist = Array.from(Array(n), () => Array(m).fill(-1));
    dist[0][0] = 1;
    
    while (q.length > 0) {
        const [x, y] = q.shift();
        
        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue}
            if (maps[nx][ny] === 0 || dist[nx][ny] !== -1) {
                continue}
            dist[nx][ny] = dist[x][y] + 1;
            q.push([nx, ny]);
        }
    }
    return dist[n-1][m-1];
}
