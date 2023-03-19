/*
console.clear();
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x); // 2
}
console.log(x); // 1
var y = 1;
if (y === 1) {
    var y = 2;
    console.log(y); // 2
}
console.log(y); // 2

 */

var count = 2;
var total = 0;
function calcfOutside(numberparam) {
    debugger;
    console.log('desde param CALCF',this.paramCalcThis)
    this.total +=  this.count * numberparam;
    debugger;
    console.log('function' , this.total);
}


const calc = (number) => {
    console.log('desde param calc This',this.paramCalcThis);
    this.total = this.count * number;
    console.log('arrow function',this.total);
}

function printMsg() {
    this.paramCalcThis = 3;
    let paramCalcLet = 2;

    function calcfInside() {
        console.log('desde param calc Let from inside', paramCalcLet);
    }

    /*
    calc(2);
    calcfOutside(2);

     */

    setInterval(calcfInside, 2000)
    //calcF(total, 2);
}

printMsg();