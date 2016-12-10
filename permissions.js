'use strict'

class None {
  constructor() {
    this.profile = false
    this.accountBalance = false
    this.customerAddress = false
    this.accountTransaction = false
  }

  viewProfile(){
    return this.profile
  }

  viewAccountBalance(){
    return this.accountBalance
  }

  viewCustomerAddress(){
    return this.customerAddress
  }

  viewAccountTransaction(){
    return this.accountTransaction
  }
}

class Some extends None {
  constructor() {
    super()
    this.profile = true
    this.accountBalance = true
  }
}

class Admin extends None {
  constructor() {
    super()
    this.profile = true
    this.customerAddress = true
  }
}

class All extends None {
  constructor() {
    super()
    this.profile = true
    this.accountBalance = true
    this.customerAddress = true
    this.accountTransaction = true
  }
}

module.exports = {None, Some, Admin, All}
