'use strict'

const expect = require('chai').expect
const Employee = require('../employee')
const Manager = require('../manager')


describe('Given an Org Chart', () => {
  describe('When an employee is created', () => {
    it('should have no initial properties set', () => {
      let employee1 = new Employee()
      expect(employee1.lastName).to.be.equal('')
      expect(employee1.firstName).to.be.equal('')
      expect(employee1.title).to.be.equal('')
      expect(employee1.id).to.be.equal('')
     })
     it('should have initial properties set', () => {
       let employee1 = new Employee('Lee', 'Trina', 'Tax Accountant', '1234')
       expect(employee1.lastName).to.be.equal('Lee')
       expect(employee1.firstName).to.be.equal('Trina')
       expect(employee1.title).to.be.equal('Tax Accountant')
       expect(employee1.id).to.be.equal('1234')
      })
  })
  describe('When an manager is created', () => {
    it('should have no initial properties set', () => {
      let manager1 = new Manager()
      expect(manager1.lastName).to.be.equal('')
      expect(manager1.firstName).to.be.equal('')
      expect(manager1.title).to.be.equal('')
      expect(manager1.id).to.be.equal('')
      expect(manager1.directReport).to.be.eql([])
     })
     it('should have initial properties set', () => {
       let manager1 = new Manager('Lee', 'Trina', 'Tax Accountant', '1234')
       expect(manager1.lastName).to.be.equal('Lee')
       expect(manager1.firstName).to.be.equal('Trina')
       expect(manager1.title).to.be.equal('Tax Accountant')
       expect(manager1.id).to.be.equal('1234')
       expect(manager1.directReport).to.be.eql([])
      })
  })
  describe('When a manager receives an employee', () => {
    it('should receive a report', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      let employee1 = new Employee('Lee', 'Trina', 'Tax Accountant', '1234')
      manager1.addReport(employee1)
      expect(manager1.directReport).to.be.eql(['1234'])
     })
  })
  describe('When a manager receives a subsequent employee', () => {
    it('should replace the first employee', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      let employee1 = new Employee('Lee', 'Trina', 'Tax Accountant', '1234')
      let employee2 = new Employee('Corky', 'Cory', 'Financial Accountant', '9876')
      manager1.addReport(employee1)
      expect(manager1.directReport).to.be.eql(['1234'])
      manager1.addReport(employee2)
      expect(manager1.directReport).to.be.eql(['1234', '9876'])
     })
  })
  describe('When a manager receives no employee', () => {
    it('should throw an error', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      function NeedThisToCatchErrorsTests () {manager1.addReport()}
      expect(NeedThisToCatchErrorsTests).to.throw(Error)
     })
  })
  describe('When a manager receives and existing direct report', () => {
    it('should throw an error', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      let employee1 = new Employee('Lee', 'Trina', 'Tax Accountant', '1234')
      // let employee2 = new Employee('Corky', 'Cory', 'Financial Accountant', '9876')
      manager1.addReport(employee1)
      function NeedThisToCatchErrorsTests () {manager1.addReport(employee1)}
      expect(NeedThisToCatchErrorsTests).to.throw(Error)
     })
  })
  describe('When a manager receives an employee reporting to another manager', () => {
    xit('should throw an error', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      let manager2 = new Manager('Lee', 'Trina', 'Tax Accountant', '1234')
      let employee1 = new Employee('Corky', 'Cory', 'Financial Accountant', '9876')
      manager2.addReport(employee1)
      function NeedThisToCatchErrorsTests () {manager1.addReport(employee1)}
      expect(NeedThisToCatchErrorsTests).to.throw(Error)
     })
  })
  describe('When a manager terminates an employee', () => {
    it('should drop the direct report', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      let employee1 = new Employee('Lee', 'Trina', 'Tax Accountant', '1234')
      let employee2 = new Employee('Corky', 'Cory', 'Financial Accountant', '9876')
      manager1.addReport(employee1)
      manager1.addReport(employee2)
      manager1.terminateReport(employee1)
      expect(manager1.directReport).to.be.eql(['9876'])
     })
  })
  describe('When a manager terminates no employee', () => {
    it('should throw an error', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      function NeedThisToCatchErrorsTests () {manager1.terminateReport()}
      expect(NeedThisToCatchErrorsTests).to.throw(Error)
     })
  })
  describe('When a manager terminates an employee that is not a direct report', () => {
    it('should throw an error', () => {
      let manager1 = new Manager('Giuliano', 'Anthony', 'Controller', '5678')
      let employee1 = new Employee('Lee', 'Trina', 'Tax Accountant', '1234')
      let employee2 = new Employee('Corky', 'Cory', 'Financial Accountant', '9876')
      manager1.addReport(employee1)
      function NeedThisToCatchErrorsTests () {manager1.terminateReport(employee2)}
      expect(NeedThisToCatchErrorsTests).to.throw(Error)
     })
  })

})
