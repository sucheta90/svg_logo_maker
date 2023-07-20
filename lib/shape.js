class Shape {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
  renderSvg() {
    throw new Error("Please use renderSvg() on the child class");
  }
}

module.exports = Shape;
