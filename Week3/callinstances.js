module.exports = class Instances {
   constructor(num) {
    this.num = num;

    if (num > 3 || num % 3 == 0){
        return ("Good Morning");
    }
    else if (num > 7 || num % 7 == 0) {
        return ("Good Afternoon");
    }   
    else if (num % 3 == 0 && num % 7 == 0) {
        return ("Good Evening");
    }
    else if (num % 3 == 0 || num % 7 == 0) {
        return (num.toString); 
    } else 
        return Instances;
    } catch (err){
        logError(err)
    }        
}