import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'SELLER',
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    sellerPicturePath: String,
    sellerPictureId: String,
    restaurantAddress: {
      addressLine: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pinCode: { type: String, required: true },
      landmark: String,
    },
  },
  { timestamps: true },
);

const Seller = mongoose.model('Seller', sellerSchema);
export default Seller;
