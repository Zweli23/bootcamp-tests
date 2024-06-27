describe('Test greet function', function() {
    // Define test data array
    var testData = [
      { name: 'Zweli', expected: 'Hello, Zweli' },
    ];
  
    // Iterate over test data and create a test case for each entry
    testData.forEach(function(data) {
      it(`should greet ${data.name}`, function() {
        assert.equal(greet(data.name), data.expected);
      });
    });
  });
  