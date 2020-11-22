const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    location: {
        type: String,

    }, phoneNumber: {
        type: String
    },

    isOrg: {
        type: Boolean
    },
    event: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    }]

})


const Client = mongoose.model('client', clientSchema);


module.exports = { Client };
