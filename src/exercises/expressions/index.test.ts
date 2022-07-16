import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import Expression from "./expression.ts";
import PrefixExpression from "./prefix_expression.ts";
import PostfixExpression from "./postfix_expression.ts";
import InfixExpression from "./infix_expression.ts";

Deno.test("Conversions", () => {
  const x = Expression.fromString("/+18-41") as PrefixExpression;
  assertEquals(x.toPostfix().expression, "18+41-/");
  assertEquals(x.toInfix().expression, "((1+8)/(4-1))");

  const y = Expression.fromString("(1+3)*(1-1)") as InfixExpression;
  assertEquals(y.toPostfix().expression, "13+11-*");
  assertEquals(y.toPrefix().expression, "*+13-11");

  const z = Expression.fromString("30+42*+") as PostfixExpression;
  assertEquals(z.toPrefix().expression, "++30*42");
  assertEquals(z.toInfix().expression, "((3+0)+(4*2))");
});

Deno.test("Evaluations", () => {
  const x = Expression.fromString("*+71-40") as PrefixExpression;
  assertEquals(x.evaluate(), 32);

  const y = Expression.fromString("(1+8)*(2-1)") as InfixExpression;
  assertEquals(y.evaluate(), 9);

  const z = Expression.fromString("51+42*+") as PostfixExpression;
  assertEquals(z.evaluate(), 14);
});
