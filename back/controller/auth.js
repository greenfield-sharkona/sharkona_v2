const jwt = require('jsonwebtoken');
const Client = require('../model/clientSchema').Client;
const Company = require('../model/companySchema').Company;

module.exports  =  async (req, res, next)=> {
    const token  = req.header("login")
    // console.log(token)

    if (!token) {
        return res.status(401).send('accses faild ')
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN)
        // console.log(verified)
        const client = await Client.findOne({_id: verified._id})
        if(!client){
            const company = await Company.findOne({_id: verified._id})
            req.client = company
            return next()
        }
         req.client = client;
        //  console.log(client);
        // res.header('login', token)dt8
        next()
    }
    catch (err) {
        res.status(400).send('invalid Token')

    }
};

