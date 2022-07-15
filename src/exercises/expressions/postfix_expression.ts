import BaseExpression from "./base_expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import InfixExpression from "./infix_expression.ts";

import Stack from "../../classes/stack/index.ts";

class PostfixExpression extends BaseExpression {
	constructor(expression: string) {
		super(expression, 'postfix');
	}

	// toPrefix(): PrefixExpression {
	// 	// todo
	// }
	//
	// toInfix(): InfixExpression {
	// 	// todo
	// }

	evaluate() {
    // Todo
  }
}

export default PostfixExpression;
