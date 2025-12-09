import PeopleAccount = require("./Class/PeopleAccount")
import CompanyAccount = require("./Class/CompanyAccount")


const peopleAccount:PeopleAccount = new PeopleAccount(1, 'João', 123)
// console.log(peopleAccount)
// console.log(peopleAccount.getName())
// peopleAccount.setName('jaozin')
// console.log(peopleAccount.getName())
// const companyAccount:CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount)
// companyAccount.deposit()


peopleAccount.deposit();