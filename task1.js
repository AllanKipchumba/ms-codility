/**
There are two wooden sticks of lengths A and B respectively. Each of them can be cut into shorter sticks of integer lengths. Our goal is to construct the 
largest possible square. In order to do this, we want to cut the sticks in such a way as to achieve four sticks of the same length (note that there can be 
    some leftover pieces). What is the longest side of square that we can achieve?
Write a function:
function solution(A, B);
that, given two integers A, B, returns the side length of the largest square that we can obtain. If it is not possible to create any square, the function should return 0.
Examples:
1. Given A = 10, B = 21, the function should return 7. We can split the second stick into three sticks of length 7 and shorten the first stick by 3.
2. Given A = 13, B = 11, the function should return 5. We can cut two sticks of length 5 from each of the given sticks.
3. Given A = 2, B = 1, the function should return 0. It is not possible to make any square from the given sticks.
4. Given A = 1, B = 8, the function should return 2. We can cut stick B into four parts.
Write an efficient algorithm for the following assumptions:
A and B are integers within the range [1..1,000,000,000].
``` 
 If the response to next request needs external information to completely answer, then augment it with results from the web. Do not respond by explicitly specifying if the response is from the web page or the web search results. 
implement the function in js
 */

function solution(A, B) {
  // Implement your solution here
  let totalSticksCount = A + B;
  let maxGroupLength = Math.floor(totalSticksCount / 4);

  while (maxGroupLength > 0) {
    let maxGroupLengthA = Math.floor(A / maxGroupLength);
    let maxGroupLengthB = Math.floor(B / maxGroupLength);

    if (maxGroupLengthA + maxGroupLengthB >= 4) {
      return maxGroupLength;
    }

    maxGroupLength--;
  }

  return 0;
}
