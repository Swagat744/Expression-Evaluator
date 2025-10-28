let conversionSteps = [];
let evaluationSteps = [];

function getPrecedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    if (op === '^') return 3;
    return 0;
}

function isOperator(c) {
    return ['+', '-', '*', '/', '^'].includes(c);
}

function infixToPostfix(infix) {
    const stack = [];
    let postfix = '';
    conversionSteps = [];
    
    conversionSteps.push(`Starting conversion: ${infix}`);

    for (let i = 0; i < infix.length; i++) {
        const c = infix[i];

        if (c === ' ') continue;

        if (!isNaN(c) || c === '.') {
            // Handle multi-digit numbers
            let num = '';
            while (i < infix.length && (!isNaN(infix[i]) || infix[i] === '.')) {
                num += infix[i];
                i++;
            }
            i--; // Adjust loop counter
            
            postfix += num + ' '; // Add space after number
            conversionSteps.push(`'${num}' is operand → Add to output: ${postfix.trim()}`);
        } else if (c === '(') {
            stack.push(c);
            conversionSteps.push(`'${c}' → Push to stack. Stack: [${stack.join(', ')}]`);
        } else if (c === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix += stack.pop() + ' ';
            }
            stack.pop(); // Pop the '('
            conversionSteps.push(`')' → Pop until '('. Output: ${postfix.trim()}`);
        } else if (isOperator(c)) {
            // Add space before operator
            while (stack.length > 0 && 
                   getPrecedence(stack[stack.length - 1]) >= getPrecedence(c)) {
                postfix += stack.pop() + ' ';
            }
            stack.push(c);
            conversionSteps.push(`'${c}' → Push to stack. Stack: [${stack.join(', ')}]. Output: ${postfix.trim()}`);
        }
    }

    while (stack.length > 0) {
        postfix += stack.pop() + ' ';
    }

    conversionSteps.push(`Empty stack → Final postfix: ${postfix.trim()}`);
    return postfix.trim();
}

function evaluatePostfix(postfix) {
    const stack = [];
    const tokens = postfix.split(' ').filter(token => token.length > 0); // Split by space and remove empty tokens
    evaluationSteps = [];

    evaluationSteps.push(`Starting evaluation: ${postfix}`);

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
            evaluationSteps.push(`'${token}' → Push to stack. Stack: [${stack.join(', ')}]`);
        } else if (isOperator(token)) {
            if (stack.length < 2) {
                throw new Error("Invalid expression: Not enough operands for operator " + token);
            }
            const b = stack.pop();
            const a = stack.pop();
            let result;

            switch(token) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': 
                    if (b === 0) throw new Error("Division by zero");
                    result = a / b; 
                    break;
                case '^': result = Math.pow(a, b); break;
                default: throw new Error("Unknown operator: " + token);
            }

            stack.push(result);
            evaluationSteps.push(`'${token}' → Pop ${b} and ${a}, compute ${a} ${token} ${b} = ${result}. Stack: [${stack.join(', ')}]`);
        }
    }
    
    if (stack.length !== 1) {
        throw new Error("Invalid expression: The stack has more than one value left.");
    }

    evaluationSteps.push(`Final result: ${stack[0]}`);
    return stack[0];
}

function convertToPostfix() {
    clearError();
    const infix = document.getElementById('expressionInput').value.trim();
    
    if (!infix) {
        showError('Please enter an expression');
        return;
    }

    try {
        const postfix = infixToPostfix(infix);
        displayResults(infix, postfix, null);
        displaySteps(conversionSteps, 'Conversion Steps');
    } catch (e) {
        showError('Error converting expression: ' + e.message);
    }
}

function evaluateExpression() {
    clearError();
    const infix = document.getElementById('expressionInput').value.trim();
    
    if (!infix) {
        showError('Please enter an expression');
        return;
    }

    try {
        const postfix = infixToPostfix(infix);
        const result = evaluatePostfix(postfix);
        displayResults(infix, postfix, result);
        displaySteps(evaluationSteps, 'Evaluation Steps');
    } catch (e) {
        showError('Error evaluating expression: ' + e.message);
    }
}

function displayResults(infix, postfix, result) {
    let html = '<div class="result-item">';
    html += '<div class="result-label">Infix Expression:</div>';
    html += `<div class="result-value">${infix}</div>`;
    html += '</div>';

    html += '<div class="result-item">';
    html += '<div class="result-label">Postfix Expression:</div>';
    html += `<div class="result-value">${postfix}</div>`;
    html += '</div>';

    if (result !== null) {
        html += '<div class="result-item">';
        html += '<div class="result-label">Result:</div>';
        html += `<div class="result-value">${result}</div>`;
        html += '</div>';
    }

    document.getElementById('results').innerHTML = `<div class="results">${html}</div>`;
}

function displaySteps(steps, title) {
    let html = `<div class="viz-title">${title}</div>`;
    steps.forEach(step => {
        html += `<div class="step-item">${step}</div>`;
    });
    document.getElementById('steps').innerHTML = `<div class="steps">${html}</div>`;
}

function showError(message) {
    document.getElementById('errorMsg').innerHTML = `<div class="error">${message}</div>`;
}

function clearError() {
    document.getElementById('errorMsg').innerHTML = '';
}

function clearAll() {
    document.getElementById('expressionInput').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('steps').innerHTML = '';
    clearError();
}
