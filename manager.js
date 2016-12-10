'use strict'

const Employee = require('./employee')

class Manager extends Employee {
  constructor(lastName, firstName, title, id) {
    super(lastName, firstName, title, id)
    this.directReport = []
  }
  addReport(employee) {
   if (employee === undefined) {
     throw new Error('hi')
   }
     if (this.directReport.includes(employee.id)) {
       throw new Error('hi')
     }
     this.directReport.push(employee.id)
   }

   terminateReport(employee) {
     if (employee === undefined) {
       throw new Error('hi')
     }
     if (!this.directReport.includes(employee.id)) {
       throw new Error('hi')
     }
     this.directReport = this.directReport.filter ((x) => (x != employee.id))
   }
}

module.exports = Manager
