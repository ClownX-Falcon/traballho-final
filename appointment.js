const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: Date,
    department: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
