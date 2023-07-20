const Shape = require("../shape");

describe("Shape", () => {
  // Instantaiting Shape class
  describe("Instantiate", () => {
    it("Should be an instance of Shape class", () => {
      const someShape = new Shape();
      expect(someShape).toBeInstanceOf(Shape);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Shape class", () => {
      const text = "Hello World";
      const someShape = new Shape(text);

      expect(someShape.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Shape class", () => {
      const textColor = "white";
      const someShape = new Shape("Hello World", textColor);

      expect(someShape.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Shape class", () => {
      const bgColor = "purple";
      const someShape = new Shape("Hello world", "white", bgColor);

      expect(someShape.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const someShape = new Shape("Hello World", "white", "purple");
      expect(someShape.renderSvg())
        .toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <text fill="white">Hello World</text>
      </svg>`);
    });
  });
});
