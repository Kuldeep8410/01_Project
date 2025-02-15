const mongoose = require('mongoose');



const GoogleSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    img:  { type: String, required: true },
    role: "normal-user",
    userPost: { type: Array, default: [] },
});

// Convert Schema to Model
const GoogleUser = mongoose.model('User', GoogleSchema);

// Export the Model
module.exports = GoogleUser;