
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.
exports.merge = function(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
},

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {
        // base case
        if(arr.length < 2) {
            return arr;
        }
        var mid = Math.floor(arr.length/2);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid, arr.length);
        // Armin thought of adding exports
        // Tim said we shouldn't have to,
        // but if it works, it works
        var sortedL = exports.mergeSort(left);
        var sortedR = exports.mergeSort(right);
        return exports.merge(sortedL, sortedR);
    }
 
