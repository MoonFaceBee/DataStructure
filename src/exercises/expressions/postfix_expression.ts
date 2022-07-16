import BaseExpression from "./base_expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import InfixExpression from "./infix_expression.ts";

import Stack from "../../classes/stack/index.ts";

class PostfixExpression extends BaseExpression {
  constructor(expression: string) {
    super(expression, "postfix");
  }

  toPrefix(): PrefixExpression {
    return new PrefixExpression(this.expression.split("").reverse().join(""));
  }

  toInfix(): InfixExpression {
    const s = new Stack();

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

    return new InfixExpression(s.pop());
  }

  evaluate() {
    const s = new Stack()

		const exp = this.expression

		for (let i = 0; i < exp.length; i ++) {
			if (this.isOperator(exp[i])) {
				const op2 = s.pop()
				const op1 = s.pop()
				const o = exp[i]

				s.push(this.applyOperator(op1, o, op2))
			} else {
				s.push(Number(exp[i]))
			}
		}

		return s.pop()
  }
}

export default PostfixExpression;
