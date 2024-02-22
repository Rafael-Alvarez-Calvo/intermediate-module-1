const sum = (a, b) => {

    return a + b;
}



const curry = (f) => {

    return (n1) => {
        //return f(2,3);
        return (n2) => {
            debugger;
            return f(n1, n2)
        }
    }
}


const c = curry(sum);
const response = c(1)(2)
console.log(response);

