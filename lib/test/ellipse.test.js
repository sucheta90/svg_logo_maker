const Ellipse = require("../ellipse");

describe("Ellipse", () => {
  // Instantaiting Ellipse class
  describe("Instantiate", () => {
    it("Should be an instance of Ellipse class", () => {
      const ellipse = new Ellipse();
      expect(ellipse).toBeInstanceOf(Ellipse);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Ellipse class", () => {
      const text = "Hello World";
      const ellipse = new Ellipse(text);

      expect(ellipse.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Ellipse class", () => {
      const textColor = "white";
      const ellipse = new Ellipse("Hello World", textColor);

      expect(ellipse.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Ellipse class", () => {
      const bgColor = "purple";
      const ellipse = new Ellipse("Hello world", "white", bgColor);

      expect(ellipse.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const ellipse = new Ellipse("Hello World", "white", "purple");
      expect(ellipse.renderSvg()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><ellipse cx="150" cy="100" rx="80" ry="45" fill="purple"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="white">Hello World</text></svg>`
      );
    });
  });
});
