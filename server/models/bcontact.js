// bcontact.js - Irits Anna Mathew - 301145346 - 23-10-2021

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