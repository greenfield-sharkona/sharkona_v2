
const mongoose = require('mongoose');
const eventSchema = require('./eventSchema').Event;

const companySchema = mongoose.Schema({

    name :{
        type:String,
        required:true,
        min : 6,
        max : 255
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min : 6,
        max : 255
    },
    location:{
        type:String,

    },phoneNumber:{
        type : String
     },
     isOrg:{type:Boolean}
})


const Company = mongoose.model('company', companySchema);


module.exports = {Company};
