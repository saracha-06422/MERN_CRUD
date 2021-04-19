const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollno:{
        type: Number
    }
},{
    collection: "student"
})

module.exports = mongoose.model('Student', studentSchema);