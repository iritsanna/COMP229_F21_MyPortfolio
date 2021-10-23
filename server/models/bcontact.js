let mongoose = require('mongoose');

// create a model class
let bcontactModel = mongoose.Schema({
    
    name: String,
    phone: Number,
    email: String
},
{
    collection: "business_contact_list"
});

module.exports = mongoose.model('Business_Contact', bcontactModel);