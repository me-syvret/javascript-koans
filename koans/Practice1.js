describe('Practice 1', function() {

  // example koan solution
  it('evenOnly should only keep even numbers', function() {

    // write a function that will accept an array and return a new array of only the even numbers from the input array
    function evenOnly(numbers) {
      return numbers.filter(number => number % 2 === 0);
    }

    // test cases, do not edit these
    expect(evenOnly([0, 1, 2, 3])).toEqual([0, 2]);
    expect(evenOnly([99, 100, 62])).toEqual([100, 62]);
    expect(evenOnly([])).toEqual([]);
  });

  it('oddOnly should only keep even numbers', function() {

    // write a function that will accept an array and return a new array of only the odd numbers from the input array
    function oddOnly(numbers) {
      // write your solution here
    }

    // test cases, do not edit these
    expect(oddOnly([0, 1, 2, 3])).toEqual([1, 3]);
    expect(oddOnly([99, 100, 62])).toEqual([99]);
    expect(oddOnly([])).toEqual([]);
  });

  it('intersection should only keep elements that are in both arrays', function() {

    // write a function that will accept two arrays and return a new array of only the elements that are in both input arrays
    // the input arrays will contain only unique elements
    // the order of the elements in the output array does not matter
    function intersection(ar1, ar2) {
      // write your solution here
    }

    // test cases, do not edit these
    expect(intersection([1,5,7], [7,2,8,5]).sort()).toEqual([5, 7]);
    expect(intersection([99, 100, 62], [10, 53, 99])).toEqual([99]);
    expect(intersection([99, "cool", 62], ["cool", 53, 99]).sort()).toEqual([99, "cool"]);
    expect(intersection([], ['it empty'])).toEqual([]);
  });

  it('union should keep a single copy of any element that is in one or both of the input arrays ', function() {

    // write a function that will accept two arrays and return a new array of the elements that are in the arrays
    // the input arrays will contain only unique elements
    // the output array should only contain unique elements
    // the order of the elements in the output array does not matter
    function union(ar1, ar2) {
      // write your solution here
    }

    // test cases, do not edit these
    expect(union([1,5,7], [7,2,8,5]).sort()).toEqual([1,2,5,7,8]);
    expect(union([99, 98, 62], [10, 53, 99]).sort()).toEqual([10,53,62,98,99]);
    expect(union([99, "cool", 62], ["cool", 53, 99]).sort()).toEqual([53, 62, 99, "cool"]);
    expect(union([], ['it empty'])).toEqual(['it empty']);
  });

  it('getDuplicates should return the elements of an array which appear in the array more than once', function() {

    // write a function that will accept one array and return a new array of the elements that appear in the input array
    // more than once
    // the output array should only contain unique elements
    // the order of the elements in the output array does not matter
    function getDuplicates(ar) {
      // write your solution here
    }

    // test cases, do not edit these
    expect(getDuplicates([1,5,7,7,2,8,5]).sort()).toEqual([5, 7]);
    expect(getDuplicates([99, 99, 98, 98, 62, 10, 53, 99]).sort()).toEqual([98, 99]);
    expect(getDuplicates([99, "cool", "cool", "hmm", 53, 99]).sort()).toEqual([99, "cool"]);
    expect(getDuplicates(['no'])).toEqual([]);
  });
});
