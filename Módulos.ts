abstract class DioAccount {
    name: string
    accountNumber: number
    balance: number = 0

    constructor (name:string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log(`${this.name} depositou`)
    }

    withdraw = () => {
        console.log(`${this.name} sacou`)
    }
    
    getBalance = () => {
       console.log(this.balance)
    }
}

class PeopleAccount extends DioAccount{
    doc_id:number
    constructor(doc_id:number, name: string, accountNumber:number){
        super(name,accountNumber)
        this.doc_id = doc_id
    }
}

class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log(`${this.name} pegou um emprestimo`)
    }
}

const peopleAccount:PeopleAccount = new PeopleAccount(1,'jao',2)
console.log(peopleAccount)

const companyAccount:CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)

