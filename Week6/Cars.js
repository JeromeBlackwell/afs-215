module.exports = class Exotics{
    constructor() {
     this.array = [];
    }
    testFunction =() =>{
        return "Porsche Cayene Turbo"
    }
    addCar = (Car) =>{
        this.array.push(Car)
        return this.array
    }
    removeCar = (Car) =>{
        this.array.pop(Car)
        return this.array
    }
    searchCar = (Car) =>{
        findIndex(Car)
        return this.array
    }
     
}
