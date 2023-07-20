class Shape {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
  renderSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <text fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

module.exports = Shape;
