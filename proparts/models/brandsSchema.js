import mongoose from "./connection.js";

const brandsSchema = mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        unique:true
    },
 
});
export const brands = mongoose.model("brandsSchema", brandsSchema,"brandsSchema");