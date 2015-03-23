/**
 * Created by roman on 3/23/15.
 */
module.exports = function(exp) {
    var result;
    try {
        result = eval(exp);
    } catch (err) {
        console.log('---', err);
        result = "sorry, can't calculate this"
    }
    return result
};