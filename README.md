## Bank Account Management

This website simulates bank account management. It allows users to deposit, withdraw, and check their balance. The website is built using HTML, CSS, and JavaScript.

### Classes

The website uses a class to represent a bank account. The class has properties for the balance, account holder name, and account type. The class also has methods for depositing, withdrawing, and checking the balance.

### Switch Statements

The website uses a switch statement to handle the different actions that the user can take. The switch statement checks for the value of the `action` variable, which is set when the user clicks one of the buttons. The corresponding `case` statement is then executed.

### Try-Catch-Finally Statements

The website uses try-catch-finally statements to handle exceptions. Exceptions are errors that occur during the execution of the program. The `try` block contains the code that is likely to throw an exception. The `catch` block contains the code that is executed when an exception is thrown. The `finally` block is always executed, regardless of whether an exception is thrown.

### Instructions

To use the website, follow these steps:

1. Enter your account holder name.
2. Select your account type.
3. Click the "Deposit", "Withdraw", or "Check Balance" button.
4. Follow the prompts to complete the action.

### Walkthrough

Here is a walkthrough of how the website works:

1. When the user enters their account holder name and selects their account type, the website creates a new bank account object.
2. When the user clicks the "Deposit", "Withdraw", or "Check Balance" button, the website sets the `action` variable to the corresponding value.
3. The website then calls the `performAction()` function, which uses a switch statement to handle the different actions.
4. The corresponding `case` statement is executed, which performs the desired action.
5. If an exception occurs, the `catch` block is executed.

### Conclusion

The website uses classes, switch statements, and try-catch-finally statements to implement the bank account management functionality. The classes allow the website to encapsulate the data and behavior of a bank account. The switch statements allow the website to handle the different actions that the user can take. The try-catch-finally statements allow the website to handle exceptions.
