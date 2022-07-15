import Expression from "./expression.ts";

class PostfixExpression extends Expression {
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
