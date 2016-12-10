'use strict'

const expect = require('chai').expect
const None = require('../permissions').None
const Some = require('../permissions').Some
const Admin = require('../permissions').Admin
const All = require('../permissions').All
// const Some = require('../permissions').*

describe('Given User Permissions', () => {
  describe('When a user type NONE is created', () => {
    it('should have no permissions', () => {
      let user1 = new None()
      expect(user1.profile).to.be.false
      expect(user1.accountBalance).to.be.false
      expect(user1.customerAddress).to.be.false
      expect(user1.accountTransaction).to.be.false
    })
    it('should be instance of None', () => {
      let user1 = new None()
      expect(user1 instanceof None).to.be.true
    })
    it('should not be instance of Some', () => {
      let user1 = new None()
      expect(user1 instanceof Some).to.be.false
    })
    it('should not be instance of Admin', () => {
      let user1 = new None()
      expect(user1 instanceof Admin).to.be.false
    })
    it('should not be instance of All', () => {
      let user1 = new None()
      expect(user1 instanceof All).to.be.false
    })
    it('should return the permission to view profile', () => {
      let user1 = new None()
      expect(user1.viewProfile()).to.be.false
    })
    it('should return the permission to view account balance', () => {
      let user1 = new None()
      expect(user1.viewAccountBalance()).to.be.false
    })
    it('should return the permission to view customer address', () => {
      let user1 = new None()
      expect(user1.viewCustomerAddress()).to.be.false
    })
    it('should return the permission to view account transaction', () => {
      let user1 = new None()
      expect(user1.viewAccountTransaction()).to.be.false
    })
  })

  describe('When a user type SOME is created', () => {
    it('should have only profile and accountBalance permissions', () => {
      let user1 = new Some()
      expect(user1.profile).to.be.true
      expect(user1.accountBalance).to.be.true
      expect(user1.customerAddress).to.be.false
      expect(user1.accountTransaction).to.be.false
    })
    it('should be instance of None', () => {
      let user1 = new Some()
      expect(user1 instanceof None).to.be.true
    })
    it('should be instance of Some', () => {
      let user1 = new Some()
      expect(user1 instanceof Some).to.be.true
    })
    it('should not be instance of Admin', () => {
      let user1 = new Some()
      expect(user1 instanceof Admin).to.be.false
    })
    it('should not be instance of All', () => {
      let user1 = new Some()
      expect(user1 instanceof All).to.be.false
    })
    it('should return the permission to view profile', () => {
      let user1 = new Some()
      expect(user1.viewProfile()).to.be.true
    })
    it('should return the permission to view account balance', () => {
      let user1 = new Some()
      expect(user1.viewAccountBalance()).to.be.true
    })
    it('should return the permission to view customer address', () => {
      let user1 = new Some()
      expect(user1.viewCustomerAddress()).to.be.false
    })
    it('should return the permission to view account transaction', () => {
      let user1 = new Some()
      expect(user1.viewAccountTransaction()).to.be.false
    })
  })
  describe('When a user type ADMIN is created', () => {
    it('should have only profile and customerAddress permissions', () => {
      let user1 = new Admin()
      expect(user1.profile).to.be.true
      expect(user1.accountBalance).to.be.false
      expect(user1.customerAddress).to.be.true
      expect(user1.accountTransaction).to.be.false
    })
    it('should be instance of None', () => {
      let user1 = new Admin()
      expect(user1 instanceof None).to.be.true
    })
    it('should not be instance of Some', () => {
      let user1 = new Admin()
      expect(user1 instanceof Some).to.be.false
    })
    it('should be instance of Admin', () => {
      let user1 = new Admin()
      expect(user1 instanceof Admin).to.be.true
    })
    it('should not be instance of All', () => {
      let user1 = new Admin()
      expect(user1 instanceof All).to.be.false
    })
    it('should return the permission to view profile', () => {
      let user1 = new Admin()
      expect(user1.viewProfile()).to.be.true
    })
    it('should return the permission to view account balance', () => {
      let user1 = new Admin()
      expect(user1.viewAccountBalance()).to.be.false
    })
    it('should return the permission to view customer address', () => {
      let user1 = new Admin()
      expect(user1.viewCustomerAddress()).to.be.true
    })
    it('should return the permission to view account transaction', () => {
      let user1 = new Admin()
      expect(user1.viewAccountTransaction()).to.be.false
    })
  })
  describe('When a user type ALL is created', () => {
    it('should have ALL permissions', () => {
      let user1 = new All()
      expect(user1.profile).to.be.true
      expect(user1.accountBalance).to.be.true
      expect(user1.customerAddress).to.be.true
      expect(user1.accountTransaction).to.be.true
    })
    it('should be instance of None', () => {
      let user1 = new All()
      expect(user1 instanceof None).to.be.true
    })
    it('should not be instance of Some', () => {
      let user1 = new All()
      expect(user1 instanceof Some).to.be.false
    })
    it('should not be instance of Admin', () => {
      let user1 = new All()
      expect(user1 instanceof Admin).to.be.false
    })
    it('should be instance of All', () => {
      let user1 = new All()
      expect(user1 instanceof All).to.be.true
    })
    it('should return the permission to view profile', () => {
      let user1 = new All()
      expect(user1.viewProfile()).to.be.true
    })
    it('should return the permission to view account balance', () => {
      let user1 = new All()
      expect(user1.viewAccountBalance()).to.be.true
    })
    it('should return the permission to view customer address', () => {
      let user1 = new All()
      expect(user1.viewCustomerAddress()).to.be.true
    })
    it('should return the permission to view account transaction', () => {
      let user1 = new All()
      expect(user1.viewAccountTransaction()).to.be.true
    })
  })
})
