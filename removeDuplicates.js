var removeDuplicates = function (nums) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = nums[i];
      arr.push(nums[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }

  return arr.length;
};
console.log(removeDuplicates([1, 1, 2]));

//-----------------------------------------------
//-------------Best-Answer-----------------------
//-----------------------------------------------
let removeDuplicates = function (nums) {
  if (!nums.length) {
    return 0;
  }

  let pointer1 = 0;
  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }

  return pointer1 + 1;
};
console.log(removeDuplicates([1, 1, 2]));
