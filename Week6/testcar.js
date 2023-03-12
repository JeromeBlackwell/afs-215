const {expect} = require('chai');
var Exotics = require('./Cars')
describe('My Exotic Car Test', () => {
    //#1 call an array
    //# original code
    // it('Call Automobiles', () => {
    //     expect(Instance.testFunction()).to.not.equal("Porsche Cayene Turbo") // expected true to equal false

    // })

    //# refactored code
    it('Call Automobiles', () => {
        expect(Instance.testFunction()).to.equal("Porsche Cayene Turbo") // expected true to equal false
        
    })

    //#2 add an array
    //# original code
    // it('AddCar', () => {
    //     expect(Instance.addCar('Rolls Royce Phantom')).to.deep.equal('Rolls Royce Phantom') // expected true to equal false
        
    // })

    //# refactored Code
    it('AddCar', () => {
        expect(Instance.addCar('Rolls Royce Phantom')).to.deep.equal(['Rolls Royce Phantom']) // expected true to equal false
        
    })

    //#3 remove an array
    //# original code
    // it('RemoveCar', () => {
    //     expect(Instance.removedCar('Rolls Royce Phantom')) // expected true to equal false
        
    // })
    //# refactored code
    it('RemoveCar', () => {
        expect(Instance.removeCar('Rolls Royce Phantom')) // expected true to equal false

    })

    //#4 search an array
    //# original code
    // it('SearchCar', () => {
    //     expect(Instance.searchCar('Porsche Cayene Turbo'))// expected true to equal false
        
    // })
    //# refactored code
    it ('searchCar', () => {
        let exotics = ["Rolls Royce Phantom", "Porchse Cayene Turbo"] 
    if (exotics.indexOf("Rolls Royce Phantom") >=0) {
        console.log("True");
    } else {
        console.log("False");
    }
    
      })

    //#5 refactor code to implement beforeEach to your code DRY. Atleast one before, after and afterEach
    beforeEach(function(){
        Instance = new Exotics()
    })
    afterEach(function(){
        console.log('*****Test Complete*****')
    })
    before(function(){
        console.log('*****Test Start*****')
    })
    after(function(){
        console.log('*****All Test Start*****')
    })
    }
 )   