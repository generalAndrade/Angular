const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
module.exports = knex

// knex('users').insert({
//     'id' :  1,
//     'username' : 'admin', 
//     'password' : 'admin',
//     'group_id' : 1
// }).then( result => console.log(result));

knex('groups').select('*').then(result => console.log(result));