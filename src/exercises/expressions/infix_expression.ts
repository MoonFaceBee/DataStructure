import BaseExpression from "./base_expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import PostfixExpression from "./postfix_expression.ts";

import Stack from "../../classes/stack/index.ts";

class InfixExpression extends BaseExpression {
  constructor(expression: string) {
    super(expression, "infix");
  }

  toPrefix(): PrefixExpression {
    const revExp = this.expression.split("").reverse().join("").replace(
      /[)(]/g,
      (ch) => ch === "(" ? ")" : "(",
    );

    const postfix = new InfixExpression(revExp).toPostfix().expression;

    return new PrefixExpression(postfix.split("").reverse().join(""));
  }

  toPostfix(): PostfixExpression {
    const s = new Stack();
    const exp = this.expression;
    let out = "";

    for (let i = 0; i < exp.length; i++) {
      if (this.isOperator(exp[i])) {
        const o = exp[i];

        if (o === "(") {
          s.push(o);
          continue;
        } else if (o === ")") {
          while (s.peek() !== "(") {
            out += s.pop();
          }

          s.pop();
          continue;
        }

        const op = this.getOperatorPrecedence(o);

        const so = s.peek();
        const sp = so ? this.getOperatorPrecedence(so) : 0;

        if (op > sp || s.isEmpty || so === "(") {
          s.push(o);
        } else {
          while (!s.isEmpty) {
            const co = s.peek();

            if (co === "(") {
              s.pop();
              break;
            }

            if (this.getOperatorPrecedence(co) < op) {
              break;
            }

            out += s.pop();
          }

          s.push(o);
        }
      } else {
        out += exp[i];
      }
    }

    while (!s.isEmpty) {
      out += s.pop();
    }

    return new PostfixExpression(out);
  }

  evaluate() {
    return this.toPostfix().evaluate();
  }
}

export default InfixExpression;
