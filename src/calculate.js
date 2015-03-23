/**
 * Created by roman on 3/23/15.
 */
module.exports = function(exp) {
    var result,
        reg = /[^\d()*/+-\.\s]/;
    if (reg.test(exp)) return 'illegal exprssion';
    try {
        result = eval(exp);
    } catch (err) {
        result = "sorry, there is an error in expression"
    }
    return result
};