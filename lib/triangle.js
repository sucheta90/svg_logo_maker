const Shape = require("./shape");

class Triangle extends Shape {
  constructor(text, textColor, bgColor, spec) {
    super(text, textColor, bgColor);
    this.spec = spec;
  }
  renderSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
      <${this.spec} cx="50" cy="50" r="80 fill="${this.bgColor}"/>
      <text fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

module.exports = Triangle;
