import Expression from "./expression.ts";

class InfixExpression extends Expression {
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
