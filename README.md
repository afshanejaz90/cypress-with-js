
# Cypress Testing

  

This project uses Cypress for both **End-to-End (E2E)** and **Unit Testing**. This README provides an overview of the folder structure and how to run the tests.

  

## Folder Structure

  

The tests are organized into the following folders:

  

```

cypress/

├── e2e/ # End-to-End (E2E) Tests
│ ├── home-page.cy.js # Home Page test file
│ ├── contact-page.cy.js # Contact Page test file
│ ├── news-page.cy.js # News Page test file
├── unit/ # Unit Tests
│ ├── sample-unit-test.cy.js # Unit test file
└── cypress.config.js # Cypress configuration file

```

  

### **E2E Tests**

  

End-to-End (E2E) tests simulate real user interactions with the application. The tests are located in the `e2e/` folder.

  

-  **Home Page Test:**  `cypress/e2e/home-page.cy.js`

- To run E2E tests interactively:

1. Run `npx cypress open`.

2. In the Cypress Test Runner, select the `home-page.cy.js` file (or other E2E test files).

- To run E2E tests headlessly:

```bash

npx cypress run --spec "cypress/e2e/home-page.cy.js"

```

  

### **Unit Tests**

  

Unit tests verify individual pieces of functionality (e.g., functions, methods) in isolation. The tests are located in the `unit/` folder.

  

-  **One Unit Test:**  `cypress/unit/sample-unit-test.cy.js`

- To run Unit tests interactively:

1. Run `npx cypress open`.

2. In the Cypress Test Runner, select the `sample-unit-test.cy.js` file (or other Unit test files).

- To run Unit tests headlessly:

```bash

npx cypress run --spec "cypress/unit/sample-unit-test.cy.js"

```

  

### **Cypress Configuration**

  

The Cypress configuration is located in `cypress.config.js`. This file contains settings like which folders to watch for test files and configuration for various test setups.

  

### **Running Tests**

  

To open Cypress Test Runner and run tests interactively:

  

```bash

npx  cypress  open

```

  

To run tests headlessly (without the Test Runner):

  

```bash

npx  cypress  run  --spec  "cypress/e2e/home-page.cy.js"  # For E2E tests

npx  cypress  run  --spec  "cypress/unit/unit-test.cy.js"  # For Unit tests

```

---

  

For more detailed documentation, refer to the [Cypress Documentation](https://docs.cypress.io/).