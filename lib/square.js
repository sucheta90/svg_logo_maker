const Shape = require("./shape");

class Square extends Shape {
  constructor(text, textColor, bgColor) {
    super(text, textColor, bgColor);
  }
  renderSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><rect width="200" height="200" fill="${this.bgColor}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = Square;
