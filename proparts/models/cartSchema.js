import mongoose from "./connection.js";
const cartSchema =  mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the 'users' collection
    required: true,
    unique:true
  },
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products', // Reference to the 'products' collection
        required: true
      }
    }
  ]
});

export const Cart = mongoose.model('Cart', cartSchema);
