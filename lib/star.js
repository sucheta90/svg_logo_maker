const Shape = require("./shape");

class Star extends Shape {
  constructor(text, textColor, bgColor) {
    super(text, textColor, bgColor);
    // this.spec = spec;
  }
  renderSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.bgColor}"/><text x="100" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = Star;
