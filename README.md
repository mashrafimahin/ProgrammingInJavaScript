# JavaScript LeetCode Problem Solving

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e.svg)
![LeetCode](https://img.shields.io/badge/LeetCode-Solutions-blue.svg)

A comprehensive collection of JavaScript solutions for LeetCode problems, organized by difficulty level and algorithmic concepts.

## 📖 Project Overview

This repository contains my personal collection of JavaScript solutions for various LeetCode coding challenges. Each solution is implemented with clean, efficient code and includes detailed explanations, time/space complexity analysis, and test cases.

## 🏗️ Project Structure

```
Javascript/
├── README.md
├── Easy/
│   ├── Counter.js
│   └── [More easy problems...]
├── Medium/
│   └── [Medium problems...]
├── Hard/
│   └── [Hard problems...]
└── utils/
    └── [Helper functions...]
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mashrafimahin/ProgrammingInJavaScript.git
cd ProgrammingInJavaScript
```

2. Install dependencies (if any):

```bash
npm install
```

### Running Solutions

Each JavaScript file is self-contained and can be run directly with Node.js:

```bash
node Easy/Counter.js
```

Or use the browser console by opening the HTML files (if provided).

## 📊 Problem Categories

### Easy Level

### Medium Level

### Hard Level

## 🎯 Example: Counter Problem

### Problem Statement

Given an integer `n`, return a counter function. This counter function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

### Example

```javascript
Input: n = (10)[("call", "call", "call")];
Output: [10, 11, 12];
```

### Solution

```javascript
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

// Usage
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
```

### Complexity Analysis

- **Time Complexity**: O(1) - Each call is constant time
- **Space Complexity**: O(1) - Only stores the current counter value

## 🧪 Testing

Each solution includes test cases to verify correctness:

```javascript
// Example test for Counter
const counter = createCounter(10);
console.assert(counter() === 10, "Test 1 failed");
console.assert(counter() === 11, "Test 2 failed");
console.assert(counter() === 12, "Test 3 failed");
console.log("All tests passed!");
```

## 📈 Progress Tracking

| Difficulty | Problems Solved |
| ---------- | --------------- |
| Easy       | 12              |
| Medium     | 0               |
| Hard       | 0               |
| **Total**  | **12**          |

## 🎨 Code Style

This project follows these coding standards:

- **ES6+ Features**: Arrow functions, destructuring, template literals
- **Clean Code**: Meaningful variable names, clear function separation
- **Comments**: Explanatory comments for complex logic
- **Consistency**: Uniform code formatting and structure

## 🤝 Contributing

While this is a personal project, here are some guidelines if you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [LeetCode Official Website](https://leetcode.com/)
- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript 6+ Features](https://es6-features.org/)

## 🙏 Acknowledgments

- LeetCode for providing excellent coding challenges
- The JavaScript community for continuous learning resources
- All contributors to open-source algorithms and data structures

## 📞 Contact

**Mahin Mashrafi** - [GitHub Profile](https://github.com/mashrafimahin)

If you have any questions or suggestions, feel free to open an issue or reach out!

---

**Happy Coding!** 🚀
