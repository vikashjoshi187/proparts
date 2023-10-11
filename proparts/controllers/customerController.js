import { user } from '../models/user.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';


export const SECRET_KEY = crypto.randomBytes(32).toString('hex');
const maxAge = 3 * 24 * 60 * 60;

export default jwt;
let payload = {}
let token;

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existinguser = await user.findOne({ email: email });
        console.log("1", existinguser);
        if (existinguser) {
            res.render("customer/signup", { msg: 'User Already Exist' });
        } else {
            const hashpassword = await bcrypt.hash(password, 10);
            const result = await user.create({
                username: username,
                email: email,
                password: hashpassword,
                role:"customer"
            });
            await result.save();
            console.log("2", result)

            payload.result = result;
            const expireTime = {
                expiresIn: '1d'
            }
            token = jwt.sign(payload, SECRET_KEY, expireTime);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
            if (!token) {
                res.json({ message: "Error Occured while dealing with Token" });
            }
            console.log("3", token);


            res.render("customer/index", { msg: "",user:result});
        }
    }
    catch (err) {
        console.log('something went wrong', err);
    }
}


export const sellerregister = async (req, res) => {
    const { username, email, password, phone, gst_number, upi_id, pan_number } = req.body;
    try {
        const existinguser = await user.findOne({ email: email });
        console.log("1", existinguser);
        if (existinguser) {
            res.render("customer/sellersignup", { msg: 'User Already Exist' });
        } else {
            const hashpassword = await bcrypt.hash(password, 10);
            const result = await user.create({
                username: username,
                email: email,
                password: hashpassword,
                phone:phone,
                gst_number:gst_number,
                upi_id:upi_id,
                pan_number:pan_number,
                role:"seller"
            });
            await result.save();
            console.log("2", result)

            payload.result = result;
            const expireTime = {
                expiresIn: '1d'
            }
            token = jwt.sign(payload, SECRET_KEY, expireTime);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
            if (!token) {
                res.json({ message: "Error Occured while dealing with Token" });
            }
            console.log("3", token);


            res.render("customer/index", { msg: "",user:result });
        }
    }
    catch (err) {
        console.log('something went wrong', err);
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        const existinguser = await user.findOne({ email: email });

        payload.result = existinguser;
        const expireTime = {
            expiresIn: '1d'
        }
        if (!existinguser) {
            res.render('signin', { msg: "user not found" });
        } else {
            const matchpassword = await bcrypt.compare(password, existinguser.password);
            if (!matchpassword) {
                console.log("passNotMatch");
                res.render("signin", { msg: "Password Not Match" });
            } else {
                token = jwt.sign(payload, SECRET_KEY, expireTime);
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
                if (!token) {
                    response.json({ message: "Error Occured while dealing with Token" });
                }
                console.log("token", token);
                res.render("customer/index",{msg:"",user:existinguser});
            }
        }
    }
    catch (err) {
        console.log('something went wrong', err);
    }
}

export const authenticateJWT = (request, response, next) => {
    console.log("authenticateJWT : ");
    const token = request.cookies.jwt;
    if (!token) {
        response.json({ message: "Error Occured while dealing with Token inside authenticateJWT" });
    }
    jwt.verify(token, SECRET_KEY, (err, payload) => {
        if (err)
            response.json({ message: "Error Occured while dealing with Token during verify" });
        request.payload = payload;
        next();
    });
}

export const authorizeUser = (request, response, next) => {
    console.log("5", request.payload.result.email);
    next();
}
























// import { user } from '../models/user.js';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// const SECRET_KEY = "MYKEY";

// export const register = async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const existinguser = await user.findOne({ email: email });
//         console.log(existinguser);
//         if (existinguser){
//             res.render("customer/signup", { msg: 'user already exist' });
//         } else {
//             const hashpassword = await bcrypt.hash(password, 10);
//             const result = await user.create({
//                 username: username,
//                 email: email,
//                 password: hashpassword
//             });

//             await result.save();
//             const token = jwt.sign({ email: result.email, id: result.id }, SECRET_KEY);
//             console.log(token);
//             res.render("customer/index",);
//         }
//     }
//     catch (err) {
//         console.log('something went wrong', err);
//     }
// }

// export const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         console.log(email);
//         const existinguser = await user.findOne({ email: email });
//         if (!existinguser) {
//             res.render('customer/signin', { msg: "user not found" });
//         } else {
//             const matchpassword = await bcrypt.compare(password, existinguser.password);
//             if (!matchpassword) {
//                 res.render("signin", { msg: "password not match" });
//             }
//             const token = jwt.sign({ email: existinguser.email, id: existinguser.id }, SECRET_KEY);
//             console.log(token);
//             res.render("customer/index");
//         }
//     }
//     catch {
//         console.log('something went wrong', err);
//     }
// }
