class expression {
    constructor(numericalExpression: string) {
        const operand: string[] = ['+', '-', '*', '/']
        let type;

        if (operand.indexOf(numericalExpression[0]) !== -1){
            type = 'prefix'
        } else if (operand.indexOf(numericalExpression[1]) !== -1) {
            type = 'infix'
        } else {
            type = 'postfix'
        }
    }
}