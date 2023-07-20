const Triangle = require("../triangle");

describe("Triangle", () => {
  // Instantaiting Triangle class
  describe("Instantiate", () => {
    it("Should be an instance of Triangle class", () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Triangle class", () => {
      const text = "Hello World";
      const triangle = new Triangle(text);

      expect(triangle.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Triangle class", () => {
      const textColor = "white";
      const triangle = new Triangle("Hello World", textColor);

      expect(triangle.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Triangle class", () => {
      const bgColor = "purple";
      const triangle = new Triangle("Hello world", "white", bgColor);

      expect(triangle.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const triangle = new Triangle("Hello World", "white", "purple");
      expect(triangle.renderSvg()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><polygon points="150, 30 244, 182 56, 182" fill="blue" fill="purple" /><text x="150" y="160" font-size="50" text-anchor="middle" fill="white">Hello World</text></svg>`
      );
    });
  });
});
