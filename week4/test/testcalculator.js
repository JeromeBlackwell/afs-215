const {expect} = require('chai');
var Instances = require('../Calculator')
describe('My Calculator Testing', () => {
    it('Call Calculator', () => {
        var Instance = new Instances(1,2)
        expect(Instance).to.not.equal(null) // expected true to equal false
    
    })
    it('Addition', () => {
        var Instances1 = new Instances(1,2)
        expect(Instances1.add()).to.equal(4) // expected true to equal false
    
    })
    it('Addition', () => {
        var Instance = new Instances(1,2)
        expect(Instance.add()).to.equal(3) // expected true to equal false
    
    })
    it('Subtraction', () => {
        var Instance = new Instances(10,3)
        expect(Instance.sub()).to.equal(7) // expected true to equal false
    
    })
    it('Multiplication', () => {
        var Instance = new Instances(25,5)
        expect(Instance.mult()).to.equal(125) // expected true to equal false
    
    })
    it('Division', () => {
        var Instance = new Instances(1000,25)
        expect(Instance.div()).to.equal(40) // expected true to equal false
    
    })
    it('ERROR', () => {
        var Instance =  new Instances("A")
        expect(Instance).to.not.equal("Error") // expected true to equal false
       
    })

})   
    
