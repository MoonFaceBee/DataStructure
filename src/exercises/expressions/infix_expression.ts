import BaseExpression from "./base_expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import PostfixExpression from "./postfix_expression.ts";

import Stack from "../../classes/stack/index.ts";

class InfixExpression extends BaseExpression {
	constructor(expression: string) {
		super(expression, 'infix');
	}

	// toPrefix(): PrefixExpression {
	// 	// todo
	// }
	//
	// toPostfix(): PostfixExpression {
	// 	// todo
	// }

	evaluate() {
    // TODO
  }
}

export default InfixExpression;
