const jwt = require("jsonwebtoken");
const userModel=require("../models/usersModel")
require("dotenv").config()
const handleLogin =async (req, res) => {
  const { email, password } = req.body;
  
  const foundUser=await userModel.findOne({email:email})
  console.log(foundUser.password)
  if (foundUser.password===password) {
    const accessToken = jwt.sign(
      { email: foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ accessToken: accessToken });
  } else {
    res
      .json({ message: "You are not authorized to hit the api" });
  }
};
module.exports = { handleLogin };
