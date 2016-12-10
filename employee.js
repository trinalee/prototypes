'use strict'

class Employee {
  constructor(lastName, firstName, title, id) {
    this.lastName = lastName || ''
    this.firstName = firstName || ''
    this.title = title || ''
    this.id = id || ''
  }
}

module.exports = Employee
