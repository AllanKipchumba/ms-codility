/**
 * You are given a matrix A representing a chessboard with N rows and M columns. Each square of the chessboard contains an integer representing a points-based score. You have to place two rooks on the chessboard in such a way that they cannot attack each other and the sum of points on their squares is maximal. Rooks in chess can attack each other only if they are in the same row or column.
For example, given a matrix as in the following picture:
￼
we can place rooks in two different ways:
One rook on A[0][0] = 1 and another rook on A[1][1] = 3. The sum of points on these squares is 4.
One rook on A[0][1] = 4 and another rook on A[1][0] = 2. The sum of points on these squares is 6.
Your task is to find the maximum sum of two squares of the chessboards on which the rooks can be placed. In the example above, the answer is 6. We cannot, for example, place the rooks at A[0][1] and A[1][1] (whose sum is 7), as they would attack each other.
Write a function:
function solution(A);
which, given a matrix A, returns the maximum sum that can be achieved by placing two non-attacking rooks.
Examples:
1. Given matrix A with two rows and two columns:
￼
the function should return 6. We can achieve the maximum sum by selecting A[0][1] + A[1][0] = 4 + 2. The selected squares are marked in green.
2. Given matrix A with three rows and three columns:
￼
the function should return 23. We can achieve the maximum sum by selecting A[0][0] + A[1][2] = 15 + 8. The selected squares are marked in green.
3. Given matrix A with three rows and two columns:
￼
the function should return 24. We can achieve the maximum sum by selecting A[0][0] + A[1][1] = 12 + 12 or A[0][1] + A[1][0] = 12 + 12. The latter solution is marked in green.
4. Given matrix A with two rows and three columns:
￼
the function should return 22. We can achieve the maximum sum by selecting A[0][2] + A[1][0] = 14 + 8. The selected squares are marked in green.
Write an efficient algorithm for the following assumptions:

N and M are integers within range [2..600]
Each element of matrix A is an interger withi the range [0..1000000000]

 */

function solution(A) {
  const n = A.length;
  const m = A[0].length;

  const row = new Array(n).fill(0).map(() => []);
  const col = new Array(m).fill(0).map(() => []);

  // Find maximum and second maximum values in each row
  for (let i = 0; i < n; i++) {
    let mx = 0,
      mxc,
      smx = 0,
      smxc;
    for (let j = 0; j < m; j++) {
      if (A[i][j] >= mx) {
        smx = mx;
        smxc = mxc;

        mx = A[i][j];
        mxc = j;
      } else if (A[i][j] >= smx) {
        smx = A[i][j];
        smxc = j;
      }
    }
    row[i].push(mxc);
    row[i].push(smxc);
  }

  // Find maximum and second maximum values in each column
  for (let j = 0; j < m; j++) {
    let mx = 0,
      mxr,
      smx = 0,
      smxr;
    for (let i = 0; i < n; i++) {
      if (A[i][j] >= mx) {
        smx = mx;
        smxr = mxr;

        mx = A[i][j];
        mxr = i;
      } else if (A[i][j] >= smx) {
        smx = A[i][j];
        smxr = i;
      }
    }
    col[j].push(mxr);
    col[j].push(smxr);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const r = i,
      c = row[i][0];
    for (let j = 0; j < m; j++) {
      if (j !== c) {
        if (col[j][0] !== r) ans = Math.max(ans, A[r][c] + A[col[j][0]][j]);
        else ans = Math.max(ans, A[r][c] + A[col[j][1]][j]);
      }
    }
  }

  for (let j = 0; j < m; j++) {
    const c = j,
      r = col[j][0];
    for (let i = 0; i < n; i++) {
      if (i !== r) {
        if (row[i][0] !== c) ans = Math.max(ans, A[r][c] + A[i][row[i][0]]);
        else ans = Math.max(ans, A[r][c] + A[i][row[i][1]]);
      }
    }
  }

  return ans;
}

// Example usage:
const exampleMatrix = [
  [12, 12],
  [12, 12],
  [0, 7],
];
const result = solution(exampleMatrix);
console.log(result);
