module.exports = class ToDo{
    constructor() {
     this.str = [];
    }
    testFunction =() =>{
        return "Pack Passport"
    }
    addTo = (List) =>{
        this.str.push(List)
        return this.str
    }
    addMultTodo = (List) =>{
        this.str.push(List)
        return this.str
    }
    removeFirstItem = (List) =>{
        this.str.shift(List)
        return this.str
    }

    removeLastItem = (List) =>{
        this.str.pop(List)
        return this.str
    }
    
    removeSpecItem = (List) =>{
        this.str.splice(List)
        return this.str
    }

}