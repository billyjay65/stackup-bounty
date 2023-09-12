class BankAccount {
  constructor(balance, accountHolderName, accountType) {
    this.balance = balance;
    this.accountHolderName = accountHolderName;
    this.accountType = accountType;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      throw new Error("Insufficient funds");
    }

    this.balance -= amount;
  }

  checkBalance() {
    return this.balance;
  }
}

const account = new BankAccount(0, "", "");

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const checkBalanceButton = document.getElementById("checkBalance");
const balanceLabel = document.getElementById("balance");

depositButton.addEventListener("click", () => {
  const action = "deposit";
  performAction(action);
});

withdrawButton.addEventListener("click", () => {
  const action = "withdraw";
  performAction(action);
});

checkBalanceButton.addEventListener("click", () => {
  const action = "checkBalance";
  performAction(action);
});

function performAction(action) {
  switch (action) {
    case "deposit":
      const depositAmount = prompt("Enter the amount to deposit:");
      try {
        account.deposit(depositAmount);
        balanceLabel.innerHTML = account.checkBalance();
      } catch (error) {
        alert(error.message);
      }
      break;
    case "withdraw":
      const withdrawAmount = prompt("Enter the amount to withdraw:");
      try {
        account.withdraw(withdrawAmount);
        balanceLabel.innerHTML = account.checkBalance();
      } catch (error) {
        alert(error.message);
      }
      break;
    case "checkBalance":
      balanceLabel.innerHTML = account.checkBalance();
      break;
  }
}
