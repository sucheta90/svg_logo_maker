const inquirer = require("inquirer");

// Quetsions sets/array to be passed into prompt method.
const questions = [
  {
    type: "list",
    name: "shapes",
    message: "Please choose the desired shape: ",
    choices: ["Triangle", "Circle", "Square", "Eclipse", "Rectangle", "Star"],
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
        return false;
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Choose a color of your text ",
    validate: function (answer) {
      if (!answer) {
        throw new Error("Please choose a color!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "bgColor",
    message: "Choose a background color for the shape: ",
    validate: function (answer) {
      if (!answer) {
        throw new Error("Please choose a color!");
        return false;
      }
    },
  },
];

// The init function invokes the prompts
function init() {
  inquirer.prompt(questions).then((answer) => console.log(answer));
}
init();
