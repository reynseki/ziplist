const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
function zipList(arr1, arr2) {
  const finalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    finalArray.push(arr1[i], arr2[i]);
  }
  return finalArray;
}

console.log(zipList(array1, array2));

function zipListTheSimpleWay(arr1, arr2) {
  const sortedArray = _.zip(arr1, arr2);
  const finalArray = _.flatten(sortedArray);
  return finalArray;
}
console.log(zipListTheSimpleWay(array1, array2));
