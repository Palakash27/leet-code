// 1st
function rotateArray1(num, k) {
  // complete this function
  let arr1 = num.slice(0, num.length - k);
  let arr2 = num.slice(num.length - k);
  return [...arr2, ...arr1];
}
console.time("1st");
rotateArray1(
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
  ],
  35
);
console.timeEnd("1st");
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------// 3rd

// 2nd
function rotateArray2(num, k) {
  // complete this function
  for (let i = 0; i < k; i++) {
    let lastNum = num.pop();
    num.unshift(lastNum);
  }
  return num;
}
console.time("2nd");
rotateArray2(
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
  ],
  35
);
console.timeEnd("2nd");

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------// 3rd
function rotateArray3(num, k) {
  // complete this function
  while (k) {
    for (let i = 1; i < num.length; i++) {
      let firstNum = num[0]; // 1
      firstNum = firstNum + num[i]; // 3
      num[i] = firstNum - num[i]; // 1
      firstNum = firstNum - num[i]; // 2
      num[0] = firstNum;
    }
    k--;
  }
  return num;
}

console.time("3rd");
rotateArray3(
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
  ],
  35
);
console.timeEnd("3rd");

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------// 4th
function rotateArray4(num, k) {
  // complete this function
  function recurr(num, k, len) {
    if (k == 0) {
      return num;
    }
    for (let i = 1; i < len; i++) {
      let temp = num[0];
      num[0] = num[i];
      num[i] = temp;
    }
    return recurr(num, --k, len);
  }
  return recurr(num, k % num.length, num.length);
}

console.time("4th");
rotateArray4(
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
    2,
    3,
    4,
    5,
    6,
    7,
  ],
  35
);
console.timeEnd("4th");

//-----------------------------------------------
//-------------Best-Answer-----------------------
//-----------------------------------------------
let rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, k, nums.length - 1);
  reverse(nums, 0, k - 1);
};

let reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};
