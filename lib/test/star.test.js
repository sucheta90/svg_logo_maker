const Star = require("../star");

describe("Star", () => {
  // Instantaiting Star class
  describe("Instantiate", () => {
    it("Should be an instance of Star class", () => {
      const star = new Star();
      expect(star).toBeInstanceOf(Star);
    });
  });
  describe("Setting a property: text", () => {
    it("Should set a property text  to Star class", () => {
      const text = "Hello World";
      const star = new Star(text);

      expect(star.text).toBe(text);
    });
  });
  describe("Setting a property: textColor", () => {
    it("Should set a property textColor to Star class", () => {
      const textColor = "white";
      const star = new Star("Hello World", textColor);

      expect(star.textColor).toBe(textColor);
    });
  });
  describe("Setting a property to set background color: bgColor", () => {
    it("Should set a property bgColor to Star class", () => {
      const bgColor = "purple";
      const star = new Star("Hello world", "white", bgColor);

      expect(star.bgColor).toBe(bgColor);
    });
  });
  describe("renderSvg() method", () => {
    it("Should return a string with the properties and their values", () => {
      const star = new Star("Hello World", "white", "purple");
      expect(star.renderSvg())
        .toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
        <polygon points="100,10 40,198 190,78 10,78 160,198" fill="purple"/>
        <text x="100" y="130" font-size="40" text-anchor="middle" fill="white">Hello World</text>
        </svg>`);
    });
  });
});
