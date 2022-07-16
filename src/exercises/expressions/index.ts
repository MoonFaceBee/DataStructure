import Expression from "./expression.ts";
import PostfixExpression from "./postfix_expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import InfixExpression from "./infix_expression.ts";

const x = Expression.fromString("/-84+11") as PrefixExpression;
console.log(x, "  ->  ", x.evaluate());
console.log(x.toInfix());

const y = Expression.fromString("11+8*") as PostfixExpression;
console.log(y, "  ->  ", y.evaluate());
console.log(y.toInfix());

const z = Expression.fromString("9+2*3+7") as InfixExpression;
console.log(z, "  ->  ", z.evaluate());
console.log(z.toPostfix())
console.log(z.toPrefix())
