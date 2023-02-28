const {expect} = require('chai');
var Instances = require('../conditional')
describe('My Conditional Testing', () => {
    it('expect passing', () => {
        expect(true).to.equal(true) // expected true to equal false
       
    })
    it('is NaN', () => {
        var Instance =  new Instances("A")
        expect(Instance.Greeting()).to.equal("Error") // expected true to equal false
       
    })
    it('is Good Morning', () => {
        var Instance =  new Instances(6)
        expect(Instance.Greeting()).to.equal("Good Morning") // expected true to equal false
       
    })
    it('is Good Afternoon', () => {
        var Instance =  new Instances(14)
        expect(Instance.Greeting()).to.equal("Good Afternoon") // expected true to equal false
       
    })
    it('is Good Evening', () => {
        var Instance =  new Instances(21)
        expect(Instance.Greeting()).to.equal("Good Evening") // expected true to equal false
       
    })
    it('is To String', () => {
        var Instance =  new Instances(2)
        expect(Instance.Greeting()).to.equal("2") // expected true to equal false
    })
    it('Not 3 or 7', () => {
        var Instance =  new Instances(22)
        expect(Instance.Greeting()).to.equal("22") // expected true to equal false
    }) 
})




