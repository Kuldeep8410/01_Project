const mongoose = require('mongoose');

// Define Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    userPost: { type: Array, default: [] },
});

// Convert Schema to Model
const User = mongoose.model('User', UserSchema);

// Export the Model
module.exports = User;
