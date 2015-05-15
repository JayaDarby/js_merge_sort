var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });

  it('should merge arrays that are more than size 1', function(){
 	expect(mergeSort.merge([1,2,3],[1,2,3])).toEqual([1,1,2,2,3,3]);
 	expect(mergeSort.merge([10.1,10.2,10.3],[10.1,10.2,10.3])).toEqual([10.1,10.1,10.2, 10.2,10.3,10.3]);
  	expect(mergeSort.merge([5555555,7777777],[6666666,8888888])).toEqual([5555555,6666666,7777777,8888888]);
  });

});

describe('Merge Sort', function() {
  it('should sort an array', function() {
     expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
     expect(mergeSort.mergeSort([23,4,7,9,12,3,67])).toEqual([3,4,7,9,12,23,67]);
     expect(mergeSort.mergeSort([47,3,24,51,6,4,9])).toEqual([3,4,6,9,24,47,51]);
  });
});
