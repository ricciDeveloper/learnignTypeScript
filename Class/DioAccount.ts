abstract class DioAccount {
    private name: string
    accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor (name:string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log("nome alterado com sucesso")
    }

    getName = () : string => {
        return this.name
    }

    deposit = ():void => {
        if(this.validateAccount()){
            console.log(`${this.name} depositou`)
        }
    }

    withdraw = ():void => {
        console.log(`${this.name} sacou`)
    }
    
    getBalance = () :void=> {
       console.log(this.balance)
    }

    validateAccount = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta invativa');
    }

}

export = DioAccount;
