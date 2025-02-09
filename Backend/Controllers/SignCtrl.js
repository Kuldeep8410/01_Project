const express = require('express');
const UserModel = require('../Models/UserSchema');
const SignupCtrl = async (req, res) => {
    try {
        const { username, email, password,role } = req.body; // Extract request data
        console.log(req.body);

        const dataToSave = new UserModel({ 
            username,
            email,
            password,
            role,
        });

        await dataToSave.save();

        res.status(201).json({ message: "User registered successfully!", user: dataToSave });
    } catch (error) {
        res.status(500).json({ message: "Error signing up user", error: error.message });
    }
};

module.exports = SignupCtrl;
