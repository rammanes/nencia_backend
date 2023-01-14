const Joi = require("joi");
const loginSchema = Joi.object({
  userInput: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
});

const registerSchema = Joi.object({
  fullname: Joi.string().min(8).required(),
  phonenumber: Joi.string()
    .trim()
    .regex(/^\+?[1-9]\d{1,14}$/),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
});

const vendorRegisterSchema = Joi.object({
  fullname: Joi.string().min(8).required(),
  phonenumber: Joi.string()
    .trim()
    .regex(/^\+?[1-9]\d{1,14}$/),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
  businessName: Joi.string().min(5).required(),
  businessAddress: Joi.object().required(),
  businessDescription: Joi.string().min(5).required(),
});
const cartSchema = Joi.object({
  products: Joi.array().required(),
  totalPrice: Joi.number().min(3).required(),
  address: Joi.string().min(4).required(),
});

const productSchema = Joi.object({
  productPrice: Joi.string().min(8).required(),
  description: Joi.string().min(10).required(),
  address: Joi.string().min(15).required(),
  sizes: Joi.array().required(),
  yards: Joi.string().min(4).required(),
});
const addressSchema = Joi.object({
  fullname: Joi.string().min(8).required(),
  phonenumber: Joi.string()
    .trim()
    .regex(/^\+?[1-9]\d{1,14}$/),
  address: Joi.string().min(15).required(),
  city: Joi.string().min(4).required(),
  state: Joi.string().min(4).required(),
  address: Joi.string().min(15).required(),
  country: Joi.string().min(15).required(),
  zipcode: Joi.string().min(5).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  addressSchema,
  vendorRegisterSchema,
  cartSchema,
  productSchema,
};
