import PrefixExpression from "./prefix_expression.ts";
import Expression from "./expression.ts";

const t = new PrefixExpression("/-84+11").evaluate();

console.log(t);

console.log(Expression.detectType('/-84+11'))
console.log(Expression.detectType('11+8*'))
console.log(Expression.detectType('(9+2)*3+7'))
