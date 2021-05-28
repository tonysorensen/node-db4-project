const db = require('../../data/db-config.js');

const find=()=>{
    return db('recipes');
}

module.exports = {find};