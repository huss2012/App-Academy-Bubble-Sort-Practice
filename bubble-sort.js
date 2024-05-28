
function bubbleSort(arr) {
  let swapOperation = 0;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++){
    // If the current value is greater than its neighbor to the right
    // Swap those values
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swapOperation++;
        // Do not move this console.log
        console.log(arr.join(","));
    }
  }
    // If you get to the end of the array and no swaps have occurred, return
  if (swapOperation > 0) {
    return bubbleSort(arr);
  }
    // Otherwise, repeat from the beginning
  return;
}

module.exports = bubbleSort;
