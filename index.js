const { json } = require("express");
const express = require("express")

const app = express()
const port= 8000
const { body, validationResult } = require('express-validator');


app.post("/user",
// [
//     body("name","name is not valid").isLength({min:3}),
//     // body("last_name").isLength({min:2}),
//     body("email").isEmail().normalizeEmail(),
// ],(req,res)=>{
//     // console.log("res data"+ json(req))
//     const errors = validationResult(req);
//     // console.log(req)
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     User.create({
//         name: req.body.name,
//         email: req.body.email,
//     }).then(user => res.json(user));
//     // res.send(req.body)
// }

body('username').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 5 }),
(req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password,
  }).then(user => res.json(user));
},
)


app.listen(8000,()=>{
    console.log(`live from ${port}`)
})