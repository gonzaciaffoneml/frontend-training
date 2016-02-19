// * constructor parameters
// - legs: the amount of legs the walker has
// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done

function Walker(legs) {
    if (isNaN(legs)) {
        throw "Error: isNaN";
    }
    this.legs = legs;
    this.steps = 0;
}

Walker.prototype.getLegs = function () {
    return this.legs;
}

Walker.prototype.getSteps = function () {
    return this.steps;
}

Walker.prototype.walk = function () {
    steps+=1;
    return this.steps;
}

Walker.prototype.constructor = Walker;

module.exports = Walker;
