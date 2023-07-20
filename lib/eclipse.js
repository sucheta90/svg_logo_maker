const Shape = require("./shape");

class Eclipse extends Shape {
  constructor(text, textColor, bgColor) {
    super(text, textColor, bgColor);
  }
  renderSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><eclipse cx="150" cy="100" rx="80" ry="45" fill="${this.bgColor}"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = Eclipse;
