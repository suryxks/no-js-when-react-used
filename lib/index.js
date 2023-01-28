/**
 * @fileoverview suggests to change the file name from .jsx to js when react is used
 * @author surya
 */
const jsFileName = require('./rules/no-js-when-react-used');

module.exports = {
    rules: {
        'no-js-when-react-used': jsFileName
    }
}



