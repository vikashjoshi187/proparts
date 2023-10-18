import mongoose from "./connection.js";

const carmodelSchema = mongoose.Schema({
    carName: {
        type: String,
        required: true
    },
    brandId:{
        type :String,
        required:true,
    },
    varientName:{
        type :String,
        required:true,
    },
    startYear:{
        type:Date,
        required :false
    }

    
});
export const carmodel = mongoose.model("car", carmodelSchema);