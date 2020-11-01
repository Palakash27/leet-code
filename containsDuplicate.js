var containsDuplicate = function (nums) {
  let arr = {};
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]]) {
      return true;
    }
    arr[nums[i]] = true;
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 4]));

//-----------------------------------------------
//-------------Best-Answer-----------------------
//-----------------------------------------------
let containsDuplicate = function (nums) {
  let numbers = new Set();

  for (let num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
