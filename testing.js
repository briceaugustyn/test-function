
var util = require('util')
var whtevs ="a"
console.log(whtevs==="b")

module.exports = {
    assert: function(expected, actual, message="test"){
        if (expected===actual){
            console.log('👍'+message)
        
        } else{
            diff=util.inspect(expected)+"\n" +util.inspect(actual);
            console.log("💩"+message+"\n Assertion failed no match\n  "+diff);
        }
    }
    // , assert_true:function(actual, message){
    //     this.assert(true,actual,message)},
    // assert_false: function(actual, message){
    //     this.assert(false, actual...}
}
