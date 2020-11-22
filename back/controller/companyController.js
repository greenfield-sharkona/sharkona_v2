const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const Company = require('../model/companySchema').Company;
const Client = require('../model/clientSchema').Client;
const auth = require("./auth")


//this schema to validate data from the client before saved it in database  
const companySchema = joi.object({
  name: joi.string().min(6).required(),
  email: joi.string().min(6).required().email(),
  password: joi.string().min(6).required(),
  location: joi.string().required(),
  phoneNumber: joi.string().min(6).required(),

});
const loginSchema = joi.object({
  email: joi.string().min(6).required().email(),
  password: joi.string().min(6).required(),

});
//this signup method for post requeset from client to save data in database 
exports.signup = async (req, res) => {
  // this validate methode to check the requirement data
  //console.log(req.body)
  const { error } = companySchema.validate(req.body)

  if (error) return res.send(error.details[0].message)
  //findOne to check if email exit or not in database
  const isEmailExsistforClient = await Client.findOne({ email: req.body.email })
  if (isEmailExsistforClient) return res.status(400).send("email already exist in the Client")

  const isEmailExsist = await Company.findOne({ email: req.body.email })
  if (isEmailExsist) return res.status(400).send("email already exist")
  // to hashPassword to be more secure
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  //make make new document(client) in mongoDB 
  const company = new Company({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    location: req.body.location,
    phoneNumber: req.body.phoneNumber,
    isOrg: true,
    events: []
  });
  //console.log(company)

  try {
    //save document(client) in mongoDB
    const savedCompany = await company.save();
    const token = jwt.sign({ _id: company._id }, process.env.TOKEN);
    console.log(company)
    res.header("login", token);
    res.json({ token, orgId: company._id })

  }
  catch (err) {
    res.status(400).send(err);
  }


}

exports.signin = async (req, res) => {
  //res.send("sing in page");
  //to check if data from user is correct or not
  const { error } = loginSchema.validate(req.body);
  if (error) res.send(error.details[0].message);
  //check if email exist or not in database collection
  const company = await Company.findOne({ email: req.body.email });
  if (!company) return res.status(400).send("email dose not exist");

  const validPassword = await bcrypt.compare(req.body.password, company.password);
  if (!validPassword) return res.status(400).send("password is wrong");

  const token = jwt.sign({ _id: company._id }, process.env.TOKEN)
  //console.log(token);
  res.header("login", token).json({ token, orgId: company._id })
}
exports.companylogout = (req, res) => {
  res.cookie('login', '')
  res.status(200).send(req.company);
}

exports.auth = (req, res) => {
  res.json({
    id: req.client._id,
    name: req.client.name,
    email: req.client.email,
    org: req.client.org,
    isOrg: req.client.isOrg,
    success: true
  })
}