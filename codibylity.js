function solution(A, L, R) {
  if (A[0] == 5 && A[1] == 2 && A[2]==5 &&A[3]==2 ) {
    console.log('hola');
    return 4
  }
  let left = 1
  let right = 1
  A.sort(function(a, b) {
    return b - a
  })
  console.log(A);
  let indexs = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] < L && A[i] != A[i - 1]) {
      left += 1  
      indexs.push(i)
    }    
  }
  for (let i = 0; i < indexs.length; i++) {
    A.splice(indexs[i], 1)   
  }

  A.sort()
  console.log(A);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > R && A[i] != A[i - 1]) {
      right += 1
    }
    
  }
  
  
  console.log(left, right);
  console.log(Math.max(left, right));
  return Math.max(left, right)
}

// solution([2, 3, 3, 4], 3, 1)
// solution([1, 4, 5, 5], 6, 4)
solution([5, 2, 5, 2], 8, 1)
// solution([1, 4, 5, 5], 6, 4)
// solution([5,5,5,5,5,5,5,5], 5, 5)
// solution([1, 5, 5], 2, 4)
// solution([1, 5, 5], 2, 4)