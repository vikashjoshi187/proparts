import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product_name : {
        type : String,
        require : true
    },
    product_price : {
        type : Number,
        required : true
    },
    Actual_price : {
        type : Number,
        required : true
    },
    Quantity : {
        type : Number,
        required : true
    },
    Return_Days :{
        type : Number,
        required : true
    },
    Catagory :{
        type : String,
        required : true
    },
    Brand : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        require : true
    },
    image1 : {
        type : String,
        required : true
    },
    image2 : {
        type : String,
    },
    image3 : {
        type : String,
    },
    image4 : {
        type : String,
    },
    car_marker :{
        type : String,
        required : true
    },
    model_line:{
        type : String,
        required : true
    },
    car_year :{
        type : String,
        required : true
    },
    car_modification :{
        type : String,
        required : true
    },
    car_type :{
        type : String,
        required : true
    },
    part_category :{
        type : String,
        required : true
    }
});

const product = new mongoose.model('Product',ProductSchema)
export default product;
