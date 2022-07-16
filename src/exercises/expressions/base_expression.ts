export type TExpressionType = "infix" | "prefix" | "postfix";

class BaseExpression {
  expression: string;
  type: TExpressionType;

  constructor(expression: string, type: TExpressionType) {
    this.expression = expression;
    this.type = type;
  }

  isOperator(char: string): boolean {
    return "+-*/^()".includes(char);
  }

  applyOperator(op1: number, op: string, op2: number): number {
    switch (op) {
      case "+":
        return op1 + op2;
      case "-":
        return op1 - op2;
      case "*":
        return op1 * op2;
      case "/":
        return op1 / op2;
      case "^":
        return op1 ** op2;
      default:
        return Number.NaN;
    }
  }

  getOperatorPrecedence(op: any) {
    switch (op) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
        return 2;
      case "^":
        return 3;
      default:
        return Number.NaN;
    }
  }
}

export default BaseExpression;
