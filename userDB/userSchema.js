const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: [true, 'Please fill the Firstname Name']},
    lastName: {type: String, required: [true,'Please fill the SurName']},
    mailId: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    bDay: {type: Date, required: true}, 
    gender: {type: String,enum:["male","female","others"], required: true}
})

module.exports = mongoose.model("Users",userSchema);