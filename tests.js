// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('isFive', function()  {
    it('should be a defined function', function() {
      expect(typeof isFive).toBe('function');
    });
    it("should never return 'undefined' when called", function() {
       expect(isFive()).not.toBe(undefined);
    });
    it('should return true when input is 5', function() {
       expect(isFive(5)).toBe(true);
    });

});
describe('sayHello', function()  {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it("should never return 'undefined' when called", function() {
       expect(sayHello()).not.toBe(undefined);
    });
    it('should return a string when called', function() {
       expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, 3!" when executed', function() {
       expect(sayHello(3)).toBe('Hello, 3!');
    });
    it('should return the string "Hello, Jane!" when executed', function() {
      expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
      expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Tom!" when executed', function() {
      expect(sayHello("Tom")).toBe("Hello, Tom!");
    });
    it('should return the string "Hello, World!" when given the boolean true', function() {
      expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, null!" when input is null', function() {
      expect(sayHello(null)).toBe("Hello, null!");
    });
    it(`should return the string "Hello, null!" when input is "null"`, function() {
      expect(sayHello('null')).toBe("Hello, null!");
    });
    it('should return the string "Hello, !" when input is empty string', function() {
      expect(sayHello('')).toBe("Hello, !");
    });
});
describe('isEven', function()  {
    it('should return true when input is even number', function() {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven('22222222')).toBe(true);
    });
    it('should return false when input is not an even number', function() {
    expect(isEven(3)).toBe(false);
    expect(isEven(1)).toBe(false);
    expect(isEven('22221')).toBe(false);
    });
});
// template
//describe('', function() {
//it('', function() {
//expect()).toBe();
//});
//});