module.exports = class Instances {
    constructor(num) {
     this.num = num;
    }
    Greeting(){
         
         
        if (isNaN(this.num)) {
             return ("Error")
         }
         else if (this.num % 3 != 0 || this.num % 7 != 0) {
            return (this.num.toString());
         }
         else if (this.num % 3 == 0 && this.num % 7 == 0) {
            return ("Good Evening");
         }
         else if (this.num > 3 || this.num % 3 == 0) {
            return ("Good Morning");
         }
         else if (this.num > 7 || this.num % 7 == 0) {
            return ("Good Afternoon");
         }
         else if (this.num > 1) {
            return ("1");
         }
         else if (this.num > 2) {
            return ("2");
         }
         else if (this.num > 3) {
            return ("Good Morning")
         }
         else if (this.num > 7) {
            return ("Good Afternoon");
         }
                 
    }          
 }