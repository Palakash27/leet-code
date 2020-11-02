// 1st
var singleNumber = function (nums) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }
  let keys = Object.keys(obj);
  keys = keys.map((key) => parseInt(key));
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] == 1) {
      return keys[i];
    }
  }
};
// console.log(singleNumber([2, 2, 1]));

//2nd
var singleNumber = function (nums) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = 1;
    } else {
      delete obj[nums[i]];
    }
  }
  return Object.keys(obj)[0];
};
// console.log(singleNumber([2, 2, 1]));s

//3rd
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};
// console.log(singleNumber([2, 2, 1]));

//-----------------------------------------------
//-------------Best-Answer-----------------------
//-----------------------------------------------
var singleNumber = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return Array.from(set)[0];
};
console.log(singleNumber([2, 2, 1]));
