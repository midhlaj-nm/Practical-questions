class bankAccount{
    #balance

    constructor(initialAmount){
        this.#balance = initialAmount
    } 

    deposit(amount){
        this.#balance+=amount
        console.log(`$${amount} Deposited, new Balnce is ${this.#balance}`)
    }

    credit(amount){
        if(amount > this.#balance){
            return 'Insufficient Balance'
        } else {
            this.#balance -= amount
            console.log(`$${amount} credited from your account, new Balance is $${this.#balance}`)
        }
    }
}

const money = new bankAccount(500)

money.credit(5)