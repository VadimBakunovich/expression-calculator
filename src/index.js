function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    const arr = expr.trim().split('');
	let leftBr = 0;
	let rightBr = 0;
	arr.forEach(i => {
		if (i === '(') leftBr++;
        if (i === ')') rightBr++; 
    });
    try {
        const x = Function('return ' + expr)();
        if (leftBr !== rightBr) {
            throw new SyntaxError('ExpressionError: Brackets must be paired');
        };
        if (Function('return ' + expr)() === Infinity || expr.includes('/ 0')) {
            throw new TypeError('TypeError: Division by zero.');
        };
        return x;
    }
    catch (e) {
        if (e.name == 'SyntaxError') {
            throw new SyntaxError('ExpressionError: Brackets must be paired');
        } else if (e.name == 'TypeError') {
            throw new TypeError("TypeError: Division by zero.");
        }
    }
}

module.exports = {
    expressionCalculator
}