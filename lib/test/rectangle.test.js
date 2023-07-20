const Rectangle = require("../rectangle");

describe("Rectangle", () => {
  // Instantaiting Rectangle class
  describe("Instantiate", () => {
    it("Should be an instance of Rectangle class", () => {
      const rectangle = new Rectangle();
      expect(rectangle).toBeInstanceOf(Rectangle);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Rectangle class", () => {
      const text = "Hello World";
      const rectangle = new Rectangle(text);

      expect(rectangle.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Rectangle class", () => {
      const textColor = "white";
      const rectangle = new Rectangle("Hello World", textColor);

      expect(rectangle.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Rectangle class", () => {
      const bgColor = "purple";
      const rectangle = new Rectangle("Hello world", "white", bgColor);

      expect(rectangle.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const rectangle = new Rectangle("Hello World", "white", "purple");
      expect(rectangle.renderSvg()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><rect width="300" height="200" fill="purple"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">Hello World</text></svg>`
      );
    });
  });
});
