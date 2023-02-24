module.exports = class Instances {
   constructor(num) {
    this.num = num;
   }
   Greeting(){
        
        if (isNaN(this.num)) {
            return ("Error")
        } 
        else if (this.num % 3 == 0 && this.num % 7 == 0) {
            return ("Good Evening");
        }
        else if (this.num % 3 == 0) {
            return ("Good Morning");
        }
        else if (this.num % 7 == 0) {
            return ("Good Afternoon");
        }
                else {
            return (this.num.toString()); 
        }
        
   }          
}