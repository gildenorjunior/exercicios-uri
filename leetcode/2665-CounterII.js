/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var count = init;
    return {
        increment() {
            return ++init;
        },
        decrement() {
            return --init;
        },
        reset() {
            return init = count;
        }
    }
};


const counter = createCounter(0)
console.log(counter.increment()); // 6
console.log(counter.increment());
console.log(counter.decrement()); // 4
console.log(counter.reset()); // 5
console.log(counter.reset());