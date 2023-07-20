const Circle = require("../Circle");

describe("Circle", () => {
  // Instantaiting Circle class
  describe("Instantiate", () => {
    it("Should be an instance of Circle class", () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Circle class", () => {
      const text = "Hello World";
      const circle = new Circle(text);

      expect(circle.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Circle class", () => {
      const textColor = "white";
      const circle = new Circle("Hello World", textColor);

      expect(circle.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Circle class", () => {
      const bgColor = "purple";
      const circle = new Circle("Hello world", "white", bgColor);

      expect(circle.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const circle = new Circle("Hello World", "white", "purple");
      expect(circle.renderSvg()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
      <circle cx="150" cy="100" r="80" fill="purple"/>
      <text x="150" y="120" font-size="50" text-anchor="middle" fill="white">Hello World</text>
      </svg>`
      );
    });
  });
});
