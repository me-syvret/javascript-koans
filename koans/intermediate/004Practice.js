describe('About Equality', function() {

  it('should determine if two objects are equal by strict equality', function () {

    // write a function that will accept two objects as parameters and determine whether they are the SAME EXACT object
    function strictlyEqual(obj1, obj2) {
      return obj1 === obj2;
    }

    const a = {};
    const b = {};
    const c = { prop1: 'value1' };
    const d = { prop1: 'value1' };

    // objects are exactly equal to themselves and only themselves
    expect(strictlyEqual(a, a)).toEqual(true);
    expect(strictlyEqual(b, b)).toEqual(true);
    expect(strictlyEqual(c, c)).toEqual(true);
    expect(strictlyEqual(d, d)).toEqual(true);

    // objects with merely the same properties aren't exactly equal, even if all their properties are exactly equal
    // insight questions:
    // what is actually being compared here?
    // will this approach work the same way when comparing arrays?
    // what about when comparing functions?
    expect(strictlyEqual(a, b)).toEqual(false);
    expect(strictlyEqual(c, d)).toEqual(false);

    expect(strictlyEqual(a, null)).toEqual(false);
    expect(strictlyEqual(null, null)).toEqual(true);
  });

  it('should shallowly determine if two objects have all the same properties', function () {

    // write a function that will accept two objects as parameters and determine whether they have all the same
    // properties
    function shallowEqual(obj1, obj2) {
      return obj1 === obj2 || (
        !!obj1
        && !!obj2
        && Object.keys(obj1).every(k => obj1[k] === obj2[k])
        && Object.keys(obj2).every(k => obj1[k] === obj2[k]));
    }

    const a = { prop1: 'value1' };
    const b = { prop1: 'value1' };
    const c = { prop1: 'value1', prop2: 'value2' };
    const d = { innerObj1: a };
    const e = { innerObj1: a };
    const f = { innerObj1: b };

    // test cases, do not edit these
    expect(shallowEqual(a, a)).toEqual(true);
    expect(shallowEqual(a, b)).toEqual(true);

    expect(shallowEqual(a, null)).toEqual(false);
    expect(shallowEqual(null, null)).toEqual(true);

    expect(shallowEqual(b, c)).toEqual(false);

    expect(shallowEqual(d, e)).toEqual(true);
    expect(shallowEqual(d, f)).toEqual(false);
  });

  it('should deeply compare objects', function () {

    // write a function that will accept two objects as parameters and determine whether their properties are equal
    // should permit all nested objects to differ by strict equality but still count as equal as long as their
    // properties are equal
    function deepEqual(obj1, obj2) {
      return obj1 === obj2 || (
        !!obj1
        && !!obj2
        && Object.keys(obj1).every(k => deepEqual(obj1[k], obj2[k]))
        && Object.keys(obj2).every(k => deepEqual(obj1[k], obj2[k])));
    }

    const a = { prop1: 'value1' };
    const b = { prop1: 'value1' };
    const c = { prop1: 'value1', prop2: 'value2' };
    const d = { innerObj1: a };
    const e = { innerObj1: a };
    const f = { innerObj1: b };
    const g = [1,6,8,a];
    const h = [1,6,8,b];
    const i = [1,6,8,h];

    // test cases, do not edit these
    expect(deepEqual(a, a)).toEqual(true);
    expect(deepEqual(a, b)).toEqual(true);

    expect(deepEqual(a, null)).toEqual(false);
    expect(deepEqual(null, null)).toEqual(true);

    expect(deepEqual(b, c)).toEqual(false);
    expect(deepEqual(h, i)).toEqual(false);


    expect(deepEqual(d, e)).toEqual(true);
    expect(deepEqual(d, f)).toEqual(true);
    expect(deepEqual(g, h)).toEqual(true);
  });
});
