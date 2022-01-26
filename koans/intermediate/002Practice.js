describe('about using the Set class and array iteration functions', function() {

  it('should filter out duplicates', function() {

    // removeDuplicates should accept an array and return an array containing only one copy of each element from the input array
    // Note that, in this question and all others, some words may be used in a non-technical sense.
    // Thus, the term "filter" in this question's description is not intended to imply that arr.filter needs to be used.
    function removeDuplicates(arr) {

    }

    // test cases, do not edit these
    expect(removeDuplicates([0, 1, 2, 3])).toEqual([0, 1, 2, 3]);
    expect(removeDuplicates([99, 99, 100, 62])).toEqual([99, 100, 62]);
    expect(removeDuplicates([100, 100, 100, 100, 100])).toEqual([100]);
    expect(removeDuplicates([])).toEqual([]);
  });

  it('should split the input array by evenness', function() {

    // partitionOnEvenness should accept an array of elements and return an array containing two inner arrays.
    // The first inner array should contain the even numbers from the input array.
    // The second inner array should contain the odd numbers from the input array.
    function partitionOnEvenness(numbers) {

    }

    // test cases, do not edit these
    expect(partitionOnEvenness([0, 1, 2, 3])).toEqual([[0, 2],[1, 3]]);
    expect(partitionOnEvenness([99, 100, 62])).toEqual([[100, 62],[99]]);
    expect(partitionOnEvenness([])).toEqual([[],[]]);
  });

  it('should split the input array by remainder', function() {

    // partitionOnRemainder accepts an array of numbers and a divisor to divide them
    // It should return an array containing divisor # of inner arrays.
    // Each of those inner arrays should contain the numbers from the input array which have a remainder
    // that equals the index of the array they are in.
    //
    // In short, you can think that we are making a number of buckets (arrays) equal to divisor and putting elements
    // into each bucket according to their remainder when divided by divisor.
    //
    // You may also consider that calling partitionOnRemainder(numbers, 2) would be equivalent to calling
    // partitionOnEvennness(numbers)
    function partitionOnRemainder(numbers, divisor) {
      
    }

    // test cases, do not edit these
    expect(partitionOnRemainder([0, 1, 2, 3], 3)).toEqual([[0, 3],[1],[2]]);
    expect(partitionOnRemainder([99, 100, 62],4)).toEqual([[100],[],[62],[99]]);
    expect(partitionOnRemainder([7,8,6],1)).toEqual([[7,8,6]]);
  });
});
