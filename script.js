// function func(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let leftMax = 0;
//   let rightMax = 0;
//   let water = 0;
//   while (left < right) {
//     if (height[left] <= height[right]) {
//       leftMax = Math.max(leftMax, height[left]);
//       water += leftMax - height[left];
//       left++;
//     } else {
//       rightMax = Math.max(rightMax, height[right]);
//       water += rightMax - height[right];
//       right--;
//     }
//   }
//   return water;
// }

// const height = [4, 2, 0, 3, 2, 5];
// console.log(func(height));

// function func(prices) {
//   if (prices.length === 0) return 0;
//   let MAX_profit = 0;
//   let MIN_price = Infinity;

//   // debugger;
//   for (let i = 0; i < prices.length; i++) {
//     MIN_price = Math.min(MIN_price, prices[i]);
//     MAX_profit = Math.max(MAX_profit, prices[i] - MIN_price);
//   }
//   return MAX_profit;
// }

// const prices = [7,1,5,3,6,4]
// console.log(func(prices));

// function func(s) {
//   const freq = new Map();
//   let maxCount = 0;
//   let maxLength = 0;
//   let left = 0;
//   let right = 0;
// debugger
//   for (right; right < s.length; right++) {
//     let char = s[right];
//     freq.set(char, (freq.get(char) || 0) + 1);
//     maxCount = Math.max(maxCount, freq.get(char));
//     while (right - left + 1 - maxCount > k) {
//       let leftChar = s[left];
//       freq.set(leftChar, freq.get(leftChar) - 1);
//       left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// }

// const s = "AABABBA",
//   k = 1;

// console.log(func(s, k));



