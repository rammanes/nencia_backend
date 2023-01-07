const Joi = require('joi');
const loginSchema = Joi.object({
    userInput: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required()
});

const registerSchema = Joi.object({
    fullname: Joi.string().min(8).required(),
    phonenumber: Joi.string().trim().regex(/^\+?[1-9]\d{1,14}$/),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required()
});

const addressSchema = Joi.object({
    fullname: Joi.string().min(8).required(),
    phonenumber: Joi.string().trim().regex(/^\+?[1-9]\d{1,14}$/),
    address: Joi.string().min(15).required(),
    city: Joi.string().min(4).required(),
    state: Joi.string().min(4).required(),
    addre: Joi.string().min(15).required(),
    country: Joi.string().min(15).required(),
    zipcode: Joi.string().min(5).required()

});

module.exports = {registerSchema, loginSchema, addressSchema };