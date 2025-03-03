# 🧪 Cypress QA Automation Project

This project implements **automated tests** using **Cypress with Cucumber (BDD)** to validate different functionalities of the application under test.

📌 **Repository:** [Cypress-QA-Interview](https://github.com/esmartdie/Cypress-QA-Interview)  
📌 **Technologies:** Cypress, Cucumber (Gherkin), JavaScript  

---

## 📌 **Installation and Setup**

### **1️⃣ Prerequisites**
Before installing the project, make sure you have installed:
- [Node.js (version 16 or later)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A code editor (recommended: [VSCode](https://code.visualstudio.com/))

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/esmartdie/Cypress-QA-Interview.git
cd Cypress-QA-Interview
```

### **3️⃣ Install Dependencies**
Run the following command to install all necessary dependencies:
```sh
npm install
```

---

## 🚀 **Running Tests**

### **1️⃣ Open the Cypress Test Runner**
To open the Cypress graphical interface and run tests manually:
```sh
npx cypress open
```

### **2️⃣ Run Tests in Headless Mode**
To run all tests in headless mode (without opening the UI):
```sh
npx cypress run
```

### **3️⃣ Run a Specific Test**
Example: Run only the user registration test:
```sh
npx cypress run --spec "cypress/e2e/test/sign-up/sign-up.feature"
```



## 🎯 **Implemented Features**
✅ **Support for Cucumber (BDD)** with `.feature` files  
✅ **UI interactions** using CSS selectors  
✅ **API interception** with `cy.intercept()`  
✅ **Alert validation and success messages**  
✅ **Retry configuration for failed tests**  

---


If you have any questions or suggestions, contact me at **[your email or GitHub](https://github.com/esmartdie/Cypress-QA-Interview)**.

🚀 **Thank you for visiting the project and contributing to improving test automation with Cypress!** 🔥

