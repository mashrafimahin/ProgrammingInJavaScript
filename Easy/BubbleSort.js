//! Problem: Bubble Sort

//? Description:
//* Sort an array without using sort() method. make is from scratch.

//! Solution:
const sort = (arr) => {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

//? Testcase:
const arr = [2, 4, 5, 1];
sort(arr);
