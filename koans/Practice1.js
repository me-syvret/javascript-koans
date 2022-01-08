describe('Practice 1', function() {

  // test that you can download the exercises that I create
  it('should expect true', function() {
    const expectedValue = "You can download this.";
    const actualValue = "If you're seeing this message, you have downloaded this.";
    expect(actualValue).toBe(expectedValue);
  });
});
