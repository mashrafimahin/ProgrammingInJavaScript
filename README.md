# 🚀 JavaScript LeetCode Problem Solving

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![LeetCode](https://img.shields.io/badge/LeetCode-Solutions-blue.svg)](https://leetcode.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-12+-green.svg)](https://nodejs.org/)

> A comprehensive collection of JavaScript solutions for LeetCode problems, organized by difficulty level and algorithmic concepts.

![Code Stats](https://img.shields.io/badge/Problems-30+-brightgreen.svg)
![Code Stats](https://img.shields.io/badge/Easy-23-blue.svg)
![Code Stats](https://img.shields.io/badge/Medium-07-orange.svg)
![Code Stats](https://img.shields.io/badge/Hard-00-red.svg)

## 📋 Table of Contents

- [📖 Project Overview](#-project-overview)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Quick Start](#-quick-start)
- [🎯 Example Solutions](#-example-solutions)
- [🧪 Testing](#-testing)
- [📈 Progress Tracking](#-progress-tracking)
- [🎨 Code Style](#-code-style)
- [🤝 Contributing](#-contributing)
- [📚 Resources](#-resources)
- [🙏 Acknowledgments](#-acknowledgments)
- [📄 License](#-license)
- [📞 Contact](#-contact)

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
| Easy       | 23              |
| Medium     | 07              |
| Hard       | 0               |
| **Total**  | **30**          |

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

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License - see below for details:

```text
MIT License

Copyright (c) 2026 MashrafiMahin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 🛡️ What This Means

- ✅ **Freedom to Use**: Use this code in personal and commercial projects
- ✅ **Freedom to Modify**: Change and adapt the code as needed
- ✅ **Freedom to Distribute**: Share your modified versions
- ✅ **No Warranty**: The software is provided "as is" without any guarantees
- ✅ **Attribution Required**: Keep the copyright notice in all copies

## 📞 Contact

**Mashrafi Mahin** - [GitHub Profile](https://github.com/mashrafimahin)

📧 **Email**: [support@mail.com](mailto:mashrafi.devs@gmail.com)  
🔗 **Portfolio**: [mahiin.app](https://mahiin.netlify.app)

If you have any questions or suggestions, feel free to open an issue or reach out!

---

## 🎯 Quick Navigation

| Section                         | Description                            |
| ------------------------------- | -------------------------------------- |
| [Examples](#-example-solutions) | View sample solutions and explanations |
| [Progress](#-progress-tracking) | Track solved problems by difficulty    |
| [License](#-license)            | View licensing information             |
| [Resources](#-resources)        | Helpful links and documentation        |

---

## 🌟 Features

- ✨ **Clean & Modern**: Beautifully formatted with emojis and badges
- 📊 **Progress Tracking**: Visual progress indicators for problem solving
- 🧪 **Tested Code**: All solutions include comprehensive test cases
- 📚 **Well Documented**: Detailed explanations and complexity analysis
- 🚀 **Easy to Use**: Simple setup and execution instructions

---

**Happy Coding!** 🚀

[![GitHub Stars](https://img.shields.io/github/stars/mashrafimahin/ProgrammingInJavaScript?style=social)](https://github.com/mashrafimahin/ProgrammingInJavaScript/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/mashrafimahin/ProgrammingInJavaScript?style=social)](https://github.com/mashrafimahin/ProgrammingInJavaScript/network/members)
