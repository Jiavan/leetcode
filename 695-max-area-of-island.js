/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var count = 0,
        queue;

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                grid[i][j] = -1;
                queue = [];
                queue.push([i, j]);

                for (var k = 0; k < queue.length; k++) {
                    var x = queue[k][0],
                        y = queue[k][1];

                    dfs(grid, queue, x - 1, y);
                    dfs(grid, queue, x + 1, y);
                    dfs(grid, queue, x, y - 1);
                    dfs(grid, queue, x, y + 1);
                }
                count = Math.max(count, queue.length);
            }
        }
    }

    function dfs(grid, queue, x, y) {
        if (grid[x] && grid[x][y] === 1) {
            queue.push([x, y]);
            grid[x][y] = -1;
        }
    }

    return count;
};