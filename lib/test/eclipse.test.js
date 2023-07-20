const Eclipse = require("../eclipse");

describe("Eclipse", () => {
  // Instantaiting Eclipse class
  describe("Instantiate", () => {
    it("Should be an instance of Eclipse class", () => {
      const eclipse = new Eclipse();
      expect(eclipse).toBeInstanceOf(Eclipse);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Eclipse class", () => {
      const text = "Hello World";
      const eclipse = new Eclipse(text);

      expect(eclipse.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Eclipse class", () => {
      const textColor = "white";
      const eclipse = new Eclipse("Hello World", textColor);

      expect(eclipse.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Eclipse class", () => {
      const bgColor = "purple";
      const eclipse = new Eclipse("Hello world", "white", bgColor);

      expect(eclipse.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const eclipse = new Eclipse("Hello World", "white", "purple");
      expect(eclipse.renderSvg()).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><eclipse cx="150" cy="100" rx="80" ry="45" fill="purple"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="white">Hello World</text></svg>`
      );
    });
  });
});
