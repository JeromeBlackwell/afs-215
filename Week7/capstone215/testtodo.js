const {expect} = require('chai');
var Exotics = require('../capstone215/todo')
describe('My Today List', () => {
    //#1 call an Dictiionary
    //# original code
    // it('Call Automobiles', () => {
    //     expect(Instance.testFunction()).to.not.equal("Porsche Cayene Turbo") // expected true to equal false

    // })

    //# refactored code
    it('Call My To Do List', () => {
        expect(Instance.testFunction()).to.equal("Pack Passport") // expected true to equal false
        
    })

    //#2 add an array
    //# original code
    // it('AddCar', () => {
    //     expect(Instance.addCar('Rolls Royce Phantom')).to.deep.equal('Rolls Royce Phantom') // expected true to equal false
        
    // })

    //# refactored Code
    it('AddTo List', () => {
        expect(Instance.addTo('Pack Plane Ticket'))
             
    })
    it('Multi ToDo List', () => {
        expect(Instance.addMultTodo('Contact Hotel','Pickup Tuxedo',['Schedule pick-up at 4:45am'],['$500']))
             
    })

    //#3 remove an array
    //# original code
    // it('RemoveCar', () => {
    //     expect(Instance.removedCar('Rolls Royce Phantom')) // expected true to equal false
        
    // })
    //# refactored code
    it('RemoveFirtItem', () => {
        expect(Instance.removeFirstItem()) // expected true to equal false

    })
    it('RemoveLastItem', () => {
        expect(Instance.removeLastItem()) // expected true to equal false

    })
    it('RemoveSpecItem', () => {
        expect(Instance.removeSpecItem('Pickup Tuxedo')) // expected true to equal false

    })

    //#4 search an array
    //# original code
    // it('SearchCar', () => {
    //     expect(Instance.searchCar('Porsche Cayene Turbo'))// expected true to equal false
        
    // })
    //# refactored code
    // it ('searchCar', () => {
    //     let exotics = ["Rolls Royce Phantom", "Porchse Cayene Turbo"] 
    // if (exotics.indexOf("Rolls Royce Phantom") >=0) {
    //     console.log("True");
    // } else {
    //     console.log("False");
    // }
    
    //   })

    //#5 refactor code to implement beforeEach to your code DRY. Atleast one before, after and afterEach
    beforeEach(function(){
        Instance = new Exotics()
    })
    afterEach(function(){
        console.log('*****Test Complete*****')
    })
    beforeEach(function(){
        console.log('*****Test Start*****')
    })
    after(function(){
        console.log('*****All Test Complete*****')
    })
    }
 )   