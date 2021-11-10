function BankAccount (name) {
  //random IBAN generator
  const min = 1000000,
    max = 9999999
  const randomIBAN = Math.floor(Math.random() * (max - min) + min)

  //properties
  this.name = name
  this.balance = 0
  this.IBAN = `GR${randomIBAN}`
}

BankAccount.prototype.deposit = function (amount) {
  //Require positive int
  if (!Number.isInteger(amount) || amount < 0) {
    throw new Error('amount must be integer >= 0 ')
  }
  //deposit amount
  this.balance += amount
}

BankAccount.prototype.withdraw = function (amount) {
  //Require positive int
  if (!Number.isInteger(amount) || amount < 0) {
    throw new Error('amount must be integer >= 0. ')
  }
  //Require sufficient balance
  if (amount > this.balance) {
    return 'Balance is not enough'
  }
  //withdraw amount
  this.balance -= amount
}
//getter
BankAccount.prototype.getBalance = function () {
  return this.balance
}

//Test
/* const kostas = new BankAccount('kostas')
console.log(kostas.IBAN)
kostas.deposit(1000)
kostas.withdraw(44333)
console.log(kostas.getBalance()) */
