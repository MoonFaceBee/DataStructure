import Expression from "./expression.ts";

const x = Expression.fromString('/-84+11');
console.log(x, '  ->  ', x.evaluate());

const y = Expression.fromString('11+8*');
console.log(y, '  ->  ', y.evaluate());

const z = Expression.fromString('(9+2)*3+7');
console.log(z, '  ->  ', z.evaluate());
