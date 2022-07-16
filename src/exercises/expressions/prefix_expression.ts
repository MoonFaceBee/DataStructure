import BaseExpression from "./base_expression.ts";
import PostfixExpression from "./postfix_expression.ts";
import InfixExpression from "./infix_expression.ts";

import Stack from "../../classes/stack/index.ts";

class PrefixExpression extends BaseExpression {
  constructor(expression: string) {
    super(expression, "prefix");
  }

  toPostfix(): PostfixExpression {
    const s = new Stack();

    const exp = this.expression;

    for (let i = exp.length; i >= 0; i--) {
      if (this.isOperator(exp[i])) {
        const op1 = s.pop();
        const op2 = s.pop();
        const o = exp[i];

        s.push(`${op1}${op2}${o}`);
      } else {
        s.push(exp[i]);
      }
    }

    return new PostfixExpression(s.pop());
  }

  toInfix(): InfixExpression {
    const s = new Stack();

    const exp = this.expression;

    for (let i = exp.length - 1; i >= 0; i--) {
      if (this.isOperator(exp[i])) {
        const op1 = s.pop();
        const op2 = s.pop();
        const o = exp[i];

        s.push(`(${op1}${o}${op2})`);
      } else {
        s.push(exp[i]);
      }
    }

    return new InfixExpression(s.pop());
  }

  evaluate() {
    const stackArray: Stack = new Stack();
    const exp = this.expression;

    for (let i = exp.length - 1; i >= 0; i--) {
      if (this.isOperator(exp[i])) {
        const op = exp[i];
        const op2 = stackArray.pop();
        const op1 = stackArray.pop();

        const result: number = this.applyOperator(op2, op, op1);

        stackArray.push(result);
      } else {
        stackArray.push(Number(exp[i]));
      }
    }

    return stackArray.pop();
  }
}

export default PrefixExpression;
