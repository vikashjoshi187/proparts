import { user } from '../models/user.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import product from "../models/productmodel.js";
import { Cart } from '../models/cartSchema.js';


export const SECRET_KEY = crypto.randomBytes(32).toString('hex');
const maxAge = 86400 * 1000;

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
                role: "customer"
            });
            await result.save();
            console.log("2", result)

            payload.result = result;
            const expireTime = {
                expiresIn: '1d'
            }
            token = jwt.sign(payload, SECRET_KEY, expireTime);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
            res.cookie('user', result, { httpOnly: true, maxAge: maxAge });
            if (!token) {
                res.json({ message: "Error Occured while dealing with Token" });
            }
            console.log("3", token);


            res.render("customer/index", { msg: "", user: result });
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
                phone: phone,
                gst_number: gst_number,
                upi_id: upi_id,
                pan_number: pan_number,
                role: "seller"
            });
            await result.save();
            console.log("2", result)

            payload.result = result;
            const expireTime = {
                expiresIn: '1d'
            }
            token = jwt.sign(payload, SECRET_KEY, expireTime);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
            res.cookie('user', result, { httpOnly: true, maxAge: maxAge });

            if (!token) {
                res.json({ message: "Error Occured while dealing with Token" });
            }
            console.log("3", token);


            res.render("customer/index", { msg: "", user: result });
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
            res.render('customer/signin', { msg: "user not found" });
        } else {
            const matchpassword = await bcrypt.compare(password, existinguser.password);
            if (!matchpassword) {
                console.log("passNotMatch");
                res.render("customer/signin", { msg: "Password Not Match" });
            } else {
                token = jwt.sign(payload, SECRET_KEY, expireTime);
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
                res.cookie('user', existinguser, { httpOnly: true, maxAge: maxAge });
                if (!token) {
                    response.json({ message: "Error Occured while dealing with Token" });
                }
                console.log("token", token);
                res.render("customer/index", { msg: "", user: existinguser });
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
    const user = request.cookies.user;
    if (!token) {
        response.render("customer/index", { user: "" });

    }
    jwt.verify(token, SECRET_KEY, (err, payload) => {
        // if (err)
        //     response.json({ message: "Error Occured while dealing with Token during verify" });
        response.render("customer/index", { user: user });
    });
}

export const authorizeUser = (request, response, next) => {
    console.log("5", request.payload.result.email);
    next();
}

export const customerproduct = async (req, res) => {
    // const item = await 
    const user = req.cookies.user;
    console.log("customer page");
    try {
        if (user) {
            const result = await product.find();
            // console.log(result);
            res.render("customer/product", { productrecord: result, user: user });
        } else {
            const result = await product.find();
            // console.log(result);
            res.render("customer/product", { productrecord: result, user: "" });
        }
    } catch (error) {
        console.log("Error occures " + error);
    }
}

export const addtocart = async (req, res) => {
    var user = req.cookies.user;
    var id = user._id;
    const cart = await Cart.find({user_id: id});
    let flag = false;
    if (cart.length != 0) {
        for (let i = 0; i < cart[0].products.length; i++) {
            if (cart[0].products[i].product_id == req.params.id) {
                flag = true;
                break;
            }
        }

        if (flag) {
            console.log("Already Exit");
        } else {
            cart[0].products[cart[0].products.length] = {
                product_id: req.params.id
            }
            console.log(cart);
            await cart[0].save();
        }
    } else {
        console.log("cart created");
        try {
            const result = await Cart.create({
                user_id: id,
                products: [
                    {
                        product_id: req.params.id
                    }
                ]
            });
            await result.save();
        } catch (err) {
            console.log(err)
        }
    }
    res.redirect('product');
}


export const cartShow = async (req, res) => {
  const user = req.cookies.user;
  const userId = user._id;

  try {
    // Find the user's cart
    const cart = await Cart.findOne({ user_id: userId });

    if (cart) {
      const productIds = cart.products.map(product => product.product_id);

      // Fetch product details from the "products" collection
      const productsInCart = await product.find({ _id: { $in: productIds } });

      // Now you have an array of product details to display in the cart
      console.log("hello cart");
      console.log(productsInCart)
      res.render('customer/cart', { products: productsInCart });
    } else {
        console.log("vikas chouhan")
      res.render('customer/cart', { products: [] }); // Cart is empty
    }
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send('An error occurred');
  }
};
