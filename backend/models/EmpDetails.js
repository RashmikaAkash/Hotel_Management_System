const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const employeeSchema = new Schema({

    eid: {
        type: String,
        required: true,
    },
    Fname: {
        type: String,
        required: true,
    },
    Lname: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    NIC: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    JobType: {
        type: String,
        required: true,
    },
    ContactNum: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    DOB: {
        type: String,
        required: true,
    }
});

// Create and export the model
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
