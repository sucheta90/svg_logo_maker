const Shape = require("./shape");

class Triangle extends Shape {
  constructor(text, textColor, bgColor) {
    super(text, textColor, bgColor);
  }
  renderSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><polygon points="150, 30 244, 182 56, 182" fill="blue" fill="${this.bgColor}" /><text x="150" y="160" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = Triangle;
