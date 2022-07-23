import BaseExpression from "./base_expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import InfixExpression from "./infix_expression.ts";

import Stack from "../../classes/stack/index.ts";

class PostfixExpression extends BaseExpression {
  constructor(expression: string) {
    super(expression, "postfix");
  }

  toPrefix(): PrefixExpression {
    const s = new Stack<string>(100);

    const exp = this.expression;

    for (let i = 0; i < exp.length; i++) {
      if (this.isOperator(exp[i])) {
        const op2 = s.pop();
        const op1 = s.pop();
        const o = exp[i];

        s.push(`${o}${op1}${op2}`);
      } else {
        s.push(exp[i]);
      }
    }

    return new PrefixExpression(s.pop() as string);
  }

  toInfix(): InfixExpression {
    const s = new Stack<string>(100);

    const exp = this.expression;

    for (let i = 0; i < exp.length; i++) {
      if (this.isOperator(exp[i])) {
        const op2 = s.pop();
        const op1 = s.pop();
        const o = exp[i];

        s.push(`(${op1}${o}${op2})`);
      } else {
        s.push(exp[i]);
      }
    }

    return new InfixExpression(s.pop() as string);
  }

  evaluate(): number {
    const s = new Stack<number>(100);

    const exp = this.expression;

    for (let i = 0; i < exp.length; i++) {
      if (this.isOperator(exp[i])) {
        const op2 = s.pop() as number;
        const op1 = s.pop() as number;
        const o = exp[i];

        s.push(this.applyOperator(op1, o, op2));
      } else {
        s.push(Number(exp[i]));
      }
    }

    return s.pop() as number;
  }
}

export default PostfixExpression;
