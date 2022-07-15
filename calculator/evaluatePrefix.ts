import Stack from "../base_stack/stack.ts";

class EvaluatePrefix {
  string: string = "";

  constructor(string) {
    this.string = string;
  }

  //should move to a new class
  isOperator(charX: string) {
    switch (charX) {
      case "+":
      case "-":
      case "*":
      case "/":
        return true;
    }
    return false;
  }

  createStackArray() {
    const plate = []; //keeping
    const stackArray = new Stack(); //stack pre to po
    for (let i = this.string.length - 1; i >= 0; i--) {
      if (this.isOperator(this.string[i])) {
        const s1 = stackArray.pop();
        plate.push(s1);

        const s2 = stackArray.pop();
        plate.push(s2);

        plate.push(this.string[i]);

        const plateCalculator = `${plate[0]} ${plate[2]} ${plate[1]}`; //calculating
        const result = eval(plateCalculator);

        stackArray.push(result);
      } else {
        stackArray.push(this.string[i]);
      }
    }

    return stackArray;
  }
}

export default EvaluatePrefix;
