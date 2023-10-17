import product from "../models/productmodel.js";

class sellerController{

    static add_product = async(req,res)=>{
        try{
            console.log("gifj"+JSON.stringify(req.body));
            // var arrimages = [];
            // for(let i=0; i<req.files.length; i++){
            //     arrimages[i] = req.files[i].filename;
            // }
            const image1 = req.files['image1'][0];
            const image2 = req.files['image2'][0];
            const image3 = req.files['image3'][0];
            const image4 = req.files['image4'][0];

            const data = new product({
                product_name : req.body.product_name,
                product_price : req.body.product_price,
                Actual_price : req.body.Actual_price,
                Quantity : req.body.Quantity,
                Return_Days : req.body.Return_Days,
                Catagory : req.body.Catagory,
                category_id : req.body.category_id,
                Brand : req.body.Brand,
                Description : req.body.Description,
                car_marker : req.body.car_marker,
                model_line : req.body.model_line,
                car_year : req.body.car_year,
                car_modification : req.body.car_modification,
                car_type : req.body.car_type,
                part_category : req.body.part_category,
                image1 : image1.filename,
                image2 : image2.filename,
                image3 : image3.filename,
                image4 : image4.filename
            });
            console.log("image1 filename: " + image1.filename);
            console.log("image2 filename: " + image2.filename);
            console.log("image3 filename: " + image3.filename);
            console.log("image4 filename: " + image4.filename);
            const result = await data.save();
            // res.status(200).send({success: true, msg : "Product Detailes", data : product_data});
            res.render('seller/index');
    
        }catch(error){
            console.log("vhjhf");
            console.log(error);
            res.status(400).send({ success : false , msg : error.message});
        }
    }
    
}

export default sellerController;


