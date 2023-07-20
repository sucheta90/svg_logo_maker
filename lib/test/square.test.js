const Square = require("../square");

describe("Square", () => {
  // Instantaiting Square class
  describe("Instantiate", () => {
    it("Should be an instance of Square class", () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Square class", () => {
      const text = "Hello World";
      const square = new Square(text);

      expect(square.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Square class", () => {
      const textColor = "white";
      const square = new Square("Hello World", textColor);

      expect(square.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Square class", () => {
      const bgColor = "purple";
      const square = new Square("Hello world", "white", bgColor);

      expect(square.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const square = new Square("Hello World", "white", "purple");
      expect(square.renderSvg()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><rect width="200" height="200" fill="purple"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="white">Hello World</text></svg>`
      );
    });
  });
});
