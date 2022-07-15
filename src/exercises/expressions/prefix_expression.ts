import BaseExpression from "./base_expression.ts";
import PostfixExpression from "./postfix_expression.ts";
import InfixExpression from "./infix_expression.ts";

import Stack from "../../classes/stack/index.ts";

class PrefixExpression extends BaseExpression {
	constructor(expression: string) {
		super(expression, 'prefix');
	}

	// toPostfix(): PostfixExpression {
	// 	// todo
	// }
	//
	// toInfix(): InfixExpression {
	// 	// todo
	// }

  evaluate() {
    const stackArray: Stack = new Stack(); //stack pre to po
		const exp = this.expression;

    for (let i = exp.length - 1; i >= 0; i--) {
      if (this.isOperator(exp[i])) {
				const op = exp[i];
        const op1 = stackArray.pop();
        const op2 = stackArray.pop();

        const result: number = this.applyOperator(op1, op, op2);

        stackArray.push(result);
      } else {
        stackArray.push(Number(exp[i]));
      }
    }

    return stackArray.pop();
  }
}

export default PrefixExpression;
