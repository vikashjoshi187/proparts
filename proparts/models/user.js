import mongoose from "./connection.js";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    gst_number: {
        type: String
    },
    upi_id: {
        type: String
    },
    pan_number: {
        type: String,
    },
    role: {
        type: String,
        required:true
    }
});
export const user = mongoose.model("user", userSchema);