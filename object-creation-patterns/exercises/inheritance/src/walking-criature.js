// * inherits from
// - LivingCriature
// - Walker
// * constructor parameters:
// - the ones required to be passed to their ancestor
// * methods
// - walk
//   - must throw an exception if it has died
//   - must consume oxygen and walk
function WalkingCriature(legs, oxygen) {
    this.oxygen = oxygen;
    this.legs = legs;
}



module.exports = WalkingCriature;
