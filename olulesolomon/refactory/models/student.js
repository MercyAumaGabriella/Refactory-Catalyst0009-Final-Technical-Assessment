const mongoose = require('mongoose');
const express = require('express');

const studentSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    givenname: {
        type: String,
        required: true,
        trim: true,

    },
    title: {
        type: String,
        required: true,
        trim: true,},
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    country:{
        type: String,
        required: true,
        trim: true,
    },
    nationality: {
        type: String,
        required: true,
        trim: true,
    },
    residence:{
        type: String,
        required: true,
        trim: true,
    },
    uploadphoto : {
        type: String,
        required: true,
        trim: true,
        


    },
});
module.exports = mongoose.model('Student', studentSchema);