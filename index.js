const inquirer = require("inquirer"); // imports the inquirer package
const fs = require("fs"); // imports the writeFile() from fileSystem/ fs

//Importing different shape classes
const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");
const Rectangle = require("./lib/rectangle");
const Ellipse = require("./lib/ellipse");
const Star = require("./lib/star");
const { error } = require("console");

// Quetsions sets/array to be passed into prompt method.
const questions = [
  {
    type: "list",
    name: "shape",
    message: "Please choose the desired shape: ",
    choices: ["Circle", "Triangle", "Square", "Ellipse", "Rectangle", "Star"],
    default: "Circle",
  },
  {
    type: "input",
    name: "text",
    message: "Please enter text upto three charecters:  ",
    validate: function (answer) {
      if (answer.length > 0 && answer.length <= 3) {
        return true;
      } else {
        throw new Error("Please enter upto 3 charecters: ");
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Choose a color of your text ",
    default: "white",
  },
  {
    type: "input",
    name: "bgColor",
    message: "Choose a background color for the shape: ",
    default: "black",
  },
];
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => console.error(error));
}
// The init function invokes the prompts
function init() {
  inquirer
    .prompt(questions)
    .then((answer) => {
      console.log(answer);
      let shape = answer.shape;
      let { text, textColor, bgColor } = answer;
      let logoOutput;
      let logo;
      console.log("before switchCase");
      switch (shape) {
        case "Circle":
          logo = new Circle(text, textColor, bgColor);
          // console.log(logo.renderSvg());
          logoOutput = logo.renderSvg();
          break;
        case "Triangle":
          logo = new Triangle(text, textColor, bgColor);
          logoOutput = logo.renderSvg();
          break;
        case "Square":
          logo = new Square(text, textColor, bgColor);
          logoOutput = logo.renderSvg();
          break;
        case "Rectangle":
          logo = new Rectangle(text, textColor, bgColor);
          logoOutput = logo.renderSvg();
          break;
        case "Ellipse":
          logo = new Ellipse(text, textColor, bgColor);
          logoOutput = logo.renderSvg();
          break;
        case "Star":
          logo = new Star(text, textColor, bgColor);

          logoOutput = logo.renderSvg();
          break;
      }
      writeToFile("./examples/logo.svg", logoOutput);
    })
    .then((res) => {
      return console.log("Generated `logo.svg` inside `examples` directory");
    })
    .catch((error) => {
      console.error(error);
    });
}
init();
