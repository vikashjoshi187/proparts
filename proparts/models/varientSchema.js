import mongoose from "./connection.js";

const varientSchema = mongoose.Schema({
    varientName: {
        type: String,
        required: true,
        unique:true
    },
    brandId: {
        type: String,
        required: true,
    },
 
});
export const varient = mongoose.model("varientSchema", varientSchema,"varientSchema");