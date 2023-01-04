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

module.exports = {registerSchema, loginSchema };