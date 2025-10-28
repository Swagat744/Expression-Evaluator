# 🧮 Expression Evaluator Using Stack

A **web-based application** that demonstrates the power and practical use of the **Stack data structure** to convert and evaluate mathematical expressions.
It converts human-readable **Infix Notation** → **Postfix (Reverse Polish Notation)** and then evaluates the result efficiently.

> Built as part of the **Data Structures & Algorithms (DSA)** curriculum — connecting **theory** with **hands-on implementation**.

---

## ✨ Key Features

* 🔀 **Infix → Postfix Conversion** using the **Shunting Yard Algorithm**
* 🧱 **Stack-based Evaluation** of postfix expressions in **O(n)** time
* 👀 **Step-by-step visualization** of operations during conversion & evaluation
* ➕➖✖️➗ **Full operator support**
  `+`, `-`, `*`, `/`, `^` (Exponentiation)
* 🧩 **Proper parentheses handling** including nested expressions
* ⚠️ **Error handling**
  Invalid syntax, mismatched brackets, division by zero, etc.

---

## 💻 Tech Stack

| Technology            | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| **HTML5**             | Structure & UI layout                                |
| **CSS3**              | Responsive styling & clean design                    |
| **JavaScript (ES6+)** | Core logic (Stack, Parsing, Evaluation, DOM Control) |

---

## 🚀 How to Use

### 🛠️ Local Setup

```bash
# Clone the repo
git clone https://github.com/Swagat744/Expression-Evaluator

# Navigate to folder
cd Expression-Evaluator

# Run locally
Open index.html in any web browser
```

Everything runs client-side — **no server required ✅**

---

## 🎓 Computer Science Concepts Used

### ✔️ Shunting Yard Algorithm

Designed by **Edsger Dijkstra**
Used to convert **infix → postfix** while maintaining:

* Operator **precedence**
* Operator **associativity**
* Correct **parentheses evaluation**

### ✔️ Postfix (RPN) Evaluation

Scans expression left → right:

* If number → push to stack
* If operator → pop 2 operands, evaluate, push result back

➡️ Final stack value = **Answer**

Both algorithms operate in:
📌 **Linear Time Complexity → O(n)**

---

## 📸 Screenshots / Demo 

<img width="907" height="838" alt="Screenshot 2025-10-28 210317" src="https://github.com/user-attachments/assets/747abb50-fa91-42ff-97e7-e7f0b63faad6" />

<img width="804" height="870" alt="Screenshot 2025-10-28 210325" src="https://github.com/user-attachments/assets/be29c522-3c36-4edc-bead-69ee14e12005" />
