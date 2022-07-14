import EvaluatePrefix from "./evaluatePrefix.ts";

const t = new EvaluatePrefix("* + 2 3 - 6 4").createStackArray();
console.log(t);
