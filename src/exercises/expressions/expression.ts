// import InfixExpression from "./infix_expression.ts";
// import PrefixExpression from "./prefix_expression.ts";
// import PostfixExpression from "./postfix_expression.ts";

type TExpressionType = 'infix' | 'prefix' | 'postfix';

class Expression {
	expression: string;
	type: TExpressionType;

	constructor(expression: string, type: TExpressionType) {
		this.expression = expression;
		this.type = type;
	}

	static detectType(expression: string): TExpressionType | null {
		if (/\(*\d.*\d\)*$/.test(expression)) {
			return "infix";
		}

		if (/^\d/.test(expression)) {
			return 'postfix';
		}

		if (/\d$/.test(expression)) {
			return "prefix";
		}

		return null;
	}

	// static fromString(expression: string): InfixExpression | PrefixExpression | PostfixExpression | null {
	// 	const t = Expression.detectType(expression);
	//
	// 	switch (t) {
	// 		case 'infix':
	// 			return new InfixExpression(expression);
	// 		case 'prefix':
	// 			return new PrefixExpression(expression);
	// 		case 'postfix':
	// 			return new PostfixExpression(expression);
	// 		default:
	// 			return null;
	// 	}
	// }

	isOperator(char: string): boolean {
		return '+-*/^()'.includes(char);
	}

	applyOperator(op1: number, op: string, op2: number): number {
		switch (op) {
			case '+':
				return op1 + op2;
			case '-':
				return op1 - op2;
			case '*':
				return op1 * op2;
			case '/':
				return op1 / op2;
			case '^':
				return op1 ** op2;
			default:
				return Number.NaN;
		}
	}
}

export default Expression;