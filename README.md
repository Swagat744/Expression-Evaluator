🧮 Expression Evaluator Using Stack

A web-based application that demonstrates the practical use of the Stack data structure to convert and evaluate mathematical expressions. This project converts human-readable infix notation (e.g., (3+5)*2) into computer-friendly postfix notation and then computes the final result.

This project was built as a core part of a Data Structures and Algorithms curriculum, showcasing the bridge between theoretical concepts and practical web-based tools.

![]

✨ Key Features

Infix to Postfix Conversion: Implements the Shunting Yard Algorithm to correctly parse an infix expression into its equivalent postfix (Reverse Polish Notation) form.

Postfix Evaluation: Uses a stack-based algorithm to efficiently evaluate the postfix expression in linear time.

Step-by-Step Visualization: Provides a clear, step-by-step log of all stack operations for both the conversion and evaluation, making it an excellent educational tool.

Full Operator Support: Correctly handles operator precedence and associativity for:

Addition (+)

Subtraction (-)

Multiplication (*)

Division (/)

Exponentiation (^)

Parentheses Handling: Correctly manages nested parentheses to enforce the order of operations.

Error Handling: Provides user-friendly error messages for invalid expressions (e.g., mismatched parentheses, division by zero).

💻 Technology Stack

HTML5: For the core structure and layout of the web application.

CSS3: For modern, responsive styling and a clean user interface.

JavaScript (ES6+): For all the core logic, including:

Stack data structure implementation.

Shunting Yard Algorithm (Infix to Postfix).

Postfix Evaluation Algorithm.

DOM manipulation for the interactive UI.

🚀 How to Use

1. Live Demo (GitHub Pages):

(Once you enable GitHub Pages, paste your live URL here)
https://<YourUsername>.github.io/<YourRepositoryName>/

2. Local Setup:

Clone the repository:

git clone https://github.com/Swagat744/Expression-Evaluator


Navigate to the project folder:

cd Expression-Evaluator


Open the index.html file in your favorite web browser.

...and that's it! The entire application is self-contained and runs on the client-side.

🎓 Core Concepts & Algorithms

This project is a practical implementation of two fundamental computer science algorithms:

Shunting Yard Algorithm: Developed by Edsger Dijkstra, this algorithm is used to parse infix expressions. It uses a stack to manage operators and parentheses, correctly reordering them into a postfix queue based on their precedence and associativity.

Postfix Evaluation: Postfix (RPN) is evaluated non-recursively using a single stack. The expression is scanned from left to right:

If a number is found, it is pushed onto the stack.

If an operator is found, two numbers are popped from the stack, the operation is performed, and the result is pushed back onto the stack.

The final item left on the stack is the result.

Both algorithms achieve an efficient linear time complexity (O(n)), as they only need to scan the expression once.
