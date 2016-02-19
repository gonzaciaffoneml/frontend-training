// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise
function LivingCriature(oxygen) {
    if (isNaN(oxygen)) {
        throw "Error: isNaN";
    }
    if (oxygen < 0) {
        throw "Error: is < 0";
    }
    this.oxygen = oxygen;
}

LivingCriature.prototype.getRemainingOxygen = function () {
    return this.oxygen;
}

LivingCriature.prototype.breath = function () {
    if (this.oxygen <= 0) {
        throw "Error";
    }
    this.oxygen+=1;
    return this.oxygen;
}

LivingCriature.prototype.consumeOxygen = function () {
    if (this.oxygen <= 0) {
        throw "Error";
    }
    this.oxygen-=1;
    return this.oxygen;
}

LivingCriature.prototype.hasDied = function () {
    return this.oxygen <= 0;
}

LivingCriature.prototype.constructor = LivingCriature;

module.exports = LivingCriature;
