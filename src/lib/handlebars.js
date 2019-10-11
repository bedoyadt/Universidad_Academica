//para darle formato ala hora que fue subido em links
//para cuanto tienpon apasasdo
const { format } = require('timeago.js');
const helpers = {};
helpers.timeago = (timestamp) => {
    return format(timestamp);
};

module.exports = helpers;