const db = require("../database/migrations/dbConfig");
module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find(){
    return db("users").select("id", 'username');

}

function findBy(user){
    return db('users').where(user);
}
async function add(user){
    const [id]= await db("users").insert(user, "id");
    return findById(id);
}

function findById(id){
    return db('users')
    .where({id})
    .first();
}