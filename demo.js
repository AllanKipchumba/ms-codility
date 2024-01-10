/**
 * Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//                                    ---------------------------------------------------------------------------------

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
  //sort the array and remove duplicates
  const sortedArray = Array.from(new Set(A)).sort((a, b) => a - b);

  let smallest_positive_interger = 1;

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] <= smallest_positive_interger) {
      smallest_positive_interger = sortedArray[i] + 1;
    }
  }

  return smallest_positive_interger < 1 ? 1 : smallest_positive_interger;
}

// console.log(solution( [1, 3, 6, 4, 1, 2]));
//console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));

/**
 * Your solution(s) should consider all possible corner cases and handle large input
 *  efficiently. Passing the example test does not indicate that your solution is correct.
 *  The example test is not part of your final score.
 */
