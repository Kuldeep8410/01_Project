const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../Models/UserSchema');
const GeneratedOtp = require('./OtpGenerator');
const EmailSender = require('./EmailToUser');



const SignupCtrl = async (req, res) => {
    try {
        // app.use(express.json());
        const {username,email,password,role} = req.body; // Extract request data
        console.log(req.body);

        //checking proper request coming or not
        if(!username || !email || !password || !role){
            return res.status(400).json({
                message : "please fill inputs",
                success : false
            })
        }

        const isUserPresent = await UserModel.findOne({email : email})
        if(isUserPresent){
            return res.status(200).json({
                message : "User already exists please login",
                success : false,
            })
        }


        
        //send opt function to user
        const otp = GeneratedOtp();
        req.session.otp = otp;

        //email send to user 
        const responseEmail = await EmailSender(email,otp);
        if(responseEmail){
            return res.status(200).json({
                message : `OTP send Succesfully to ${email}`,
                success : true
            })
        }
        else if(!responseEmail) {
            return res.status(500).json({
                message : "error pleas try again",
                success : false,
            })
        }


        //wait for user side otp

        // encrypt the password
        //salt generation
        const saltRounds = 10;

        try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hashpass = await bcrypt.hash(password, salt);

            console.log("Encrypted Password:", hashpass);

            //database model document
            const dataToSave = new UserModel({
                username,
                email,
                password : hashpass,
                role,
            });
            await dataToSave.save();
            res.status(201).json({ message: "User registered successfully!", user: dataToSave });

        } catch (error) {
            res.status(500).json({ message: "Error encrypting password", success: false, error });
        }



        // const objectToDb = {
        //     username : username,
        //     email : email,
        //     password : hashpass,
        //     role : role
        // }
        // console.log("hiiii ", hashpass)

        // Note :- you can  not write the code for saving userdata to database because if encrypt fail which lead to bad writing in database


        //Outside of the try-catch block, hash is undefined because bcrypt.hash() is asynchronous. If you don't use await, the execution moves forward before the hashing completes.


       
    } catch (error) {
        res.status(500).json({ message: "Error signing up user", error: error.message });
    }
};

module.exports = SignupCtrl;
