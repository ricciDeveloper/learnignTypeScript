//Banking

//name, accountNumber
//Withdrawl, Deposit

class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber 
    }

    deposit = () => {
        console.log(`${this.name} depositou!`)
    }

    withdraw = () => {
        console.log(`${this.name} sacou!`)
    }
}



const newAccount: Account = new Account ('Jaozin', 1)
console.log(newAccount)


newAccount.deposit();
newAccount.withdraw();