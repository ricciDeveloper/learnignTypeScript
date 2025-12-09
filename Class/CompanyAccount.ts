import DioAccount = require("./DioAccount")


class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = () : void=> {
        console.log( this.getName() + ` pegou um emprestimo`)
    }
    
    deposit = (): void => {
        console.log("A empresa depositou")
    };
}

export = CompanyAccount;