/**
 * Created by roman on 3/23/15.
 */
module.exports = function(exp) {
    var result,
        reg = /[^\d()*/+-\.\s]/;
    if (reg.test(exp)) throw new Error('illegal exprssion');
    return eval(exp);
};