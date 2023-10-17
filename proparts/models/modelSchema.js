import mongoose from "./connection.js";

const modelSchema = mongoose.Schema({
    modelName: {
        type: String,
        required: true,
        unique:true
    },
    brandId: {
        type: String,
        required: true,
    },
 
});
export const models = mongoose.model("modelSchema", modelSchema,"modelSchema");