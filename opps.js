class Account {
  constructor(name, city, town) {
    this.name = name;
    this.city = city;
    this.town = town;
    this.balance = 0;
    this.active = true;
  }
  viewBalance() {
    return `your have ${this.balance} Rwf on your account`;
  }
  deposit(amount) {
    if (amount <= 10) return "the amount must be greater than 10 Rwf";
    this.balance += amount;
    return `successfuly deposited ${amount} Rwf\n your new balance is ${this.balance}`;
  }
  withdraw(amount) {
    if (amount > this.balance) return "Insunficent balance";
    this.balance -= amount;
    return `successfuly withdrawed ${amount} Rwf\n your new balance is ${this.balance}`;
  }
}
class SavingsAcc extends Account {
  constructor(name, city, town) {
    super(name, city, town);
    this.saving = 0;
  }
  savings() {
    return `You have ${this.saving} Rwf savings in  your saving account!`;
  }
  save(amount) {
    if (amount <= 10) return "the savings amount must greateater than 10";

    this.saving += amount;
    return `You now have ${this.saving} Rwf savings in your saving account`;
  }
}
const newAccount = new SavingsAcc("jabo", "kigali", "nyarungege");
const account1 = new SavingsAcc("arnold", "karongi", "west");
const account2 = new Account("kajuga", "Kigali", "kicukiro");
function admins() {
  return (this.active = false);
}

function tellers() {
  return `account owner:${this.name} has ${this.balance} Rwf in their account`;
}
console.log(admins.apply(account1));
console.log(account1);
const viewCustBalance = tellers.bind(account1);
console.log(viewCustBalance());
