const {expect} = require('chai');
var Exotics = require('../capstone215/todo')
describe('My Today List', () => {
    //#1 call the todo list
    //# original code
    // it('Call My To Do List', () => {
    //     expect(Instance.testFunction()).to.not.equal("Pack Passport") // expected true to equal false

    // })

    //# refactored code
    it('Call My To Do List', () => {
        expect(Instance.testFunction()).to.equal("Pack Passport") // expected true to equal false
        
    })
    //#2 add item
    // # original code
    it('AddTo List', () => {
        expect(Instance.addTo('Pack Plane Ticket')).to.deep.equal(['Pack Plane Ticket']) // expected true to equal false    
    })
    //# add number
    it('AddTo List', () => {
        expect(Instance.addTo(6)).to.deep.equal([6])
             
    })
    //#3
    // Add Multi Items
    // original code
    // it('Multi ToDo List', () => {
    //     expect(Instance.addMultTodo('Contact Hotel',25,['Schedule pick-up at 4:45am'],{A:1, B:2}, true)).to.deep.equal(['Contact Hotel',25,['Schedule pick-up at 4:45am'],{A:1, B:3},true]) // expected true to equal false
    // })

    // refactored code    
    it('Multi ToDo List', () => {
        expect(Instance.addMultTodo('Contact Hotel',25,['Schedule pick-up at 4:45am'],{A:1, B:2}, true)).to.deep.equal(['Contact Hotel',25,['Schedule pick-up at 4:45am'],{A:1, B:2},true]) // expected true to equal false
             
    })
    //#4 remove first item
    // #original code
    it('RemoveFirstItem', () => {
        expect(Instance.removeFirstItem()) // expected true to equal false

    })
    //#5 remove last item
    // #original code
    it('RemoveLastItem', () => {
        expect(Instance.removeLastItem()) // expected true to equal false

    })
    //#6 remove specific item
    // #original code
    it('RemoveSpecItem', () => {
        expect(Instance.removeSpecItem('Pickup Tuxedo')) // expected true to equal false

    })    
    //# original code, implement beforeEach, before, after and afterEach
    // #original code
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