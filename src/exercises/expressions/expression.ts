import InfixExpression from "./infix_expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import PostfixExpression from "./postfix_expression.ts";
import BaseExpression, { TExpressionType } from "./base_expression.ts";

class Expression extends BaseExpression {
  static detectType(expression: string): TExpressionType {
    if (/^\(*\d.*\d\)*$/.test(expression)) {
      return "infix";
    }

    if (/^\d/.test(expression)) {
      return "postfix";
    }

    if (/\d$/.test(expression)) {
      return "prefix";
    }

    throw new Error("Invalid Expression");
  }

  static fromString(
    expression: string,
  ): InfixExpression | PrefixExpression | PostfixExpression {
    const t = Expression.detectType(expression);

    switch (t) {
      case "infix":
        return new InfixExpression(expression);
      case "prefix":
        return new PrefixExpression(expression);
      case "postfix":
        return new PostfixExpression(expression);
    }

    throw new Error("Invalid Expression");
  }
}

export default Expression;
