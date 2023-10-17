import path from "path";
import multer from "multer";

// const upload = multer({storage : storage });
// const auth = require("../middleware/auth");
const storage = multer.diskStorage({
    destination : "./uploads",
    filename : (req,file,cb)=>{
        let ext = path.extname(file.originalname)
        cb(null , file.originalname);
    },
});

var upload = multer({
    storage : storage,
}).fields([
    { name: 'image1', maxCount: 1 }, // Handle image1 which we use in are project file
    { name: 'image2', maxCount: 1 } , 
    { name: 'image3', maxCount: 1 } ,
    { name: 'image4', maxCount: 1 } ,
]);;

export default upload;