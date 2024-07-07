
# LaborChatAI

This project is an intelligent chat assistant designed to enhance FinTechX customer communication and support. Using artificial intelligence and language models (LLM), this application offers automated and personalized responses in real time, providing a fluid and satisfying user experience.

---

## 📋 Index

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Use](#use)
- [Features](#features)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)

---

## 🔍 Introduction

### The problem

FinTechX, a leader in the financial sector, faces challenges in maintaining its prominent position in the digital sales market. The main problems include:

- Lack of personalization in service
- Complexity of processes
- Lack of predictive analysis tools
- High costs compared to competitors

### The solution

We developed a user interface for smart chat with the aim of:

- Improve communication and customer support
- Provide quick and personalized responses
- Provide a consistent and accessible user experience across devices

---

## 💻 Technologies

- **React Native**: Framework for developing mobile applications
- **Expo**: Platform for creating React Native apps
- **OpenAI API**: Used to integrate ChatGPT as a virtual assistant
- **EAS CLI**: Tool for application builds and deployments
- **Figma**: User interface design

---

## 🚀 Installation

### Prerequisites

- Node.js
- npm or yarn
- EXPO CLI## Running locally

Clone the project

```bash
 git clone https://github.com/juninhokaponne/LaborChat.git
```

Enter the project directory

```bash
 cd LaborChat
```

Install dependencies

```bash
 npm install
```

Recommended: Install Expo globally if you don't have it.

```bash
 npm install -g expo-cli
```

Start the server

```bash
 npm start
```
## API documentation

#### You need to pass your API_KEY(openAI) as a TOKEN in the .ENV.


| Param   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Mandatory**. Your API key |

## Environment variables

To run this project, you will need to add the following environment variables to your .env

TOKEN is your openAI API_KEY.

`TOKEN`

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

