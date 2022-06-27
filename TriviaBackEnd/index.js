const express = require("express");
const server = express();
require("dotenv").config();
//Local Files
const passport = require("./libs/passport");

//GLobal Variabls
const PORT = process.env.PORT || 3001;
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ msg: "Cool " });
});

server.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

server.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  async (req, res) => {
    //we get the user
    //if you want to see the full user you can
    //console.log(req.user)
    const { _id } = req.user;
    /* try {
      //Create a jwt's Both Of them and then send them
      //AT = accses Token
      //RT = refresh Token
      const AT = jwt.sign({ id: _id }, process.env.JWTACSESSTOKENSECRET, {
        expiresIn: process.env.ACSESSTOKENTIME,
      });
      const RT = await RefreshToken.CreateToken(_id);
      res.status(200).json({ AT, RT });
    } catch (error) {
      res.status(500).json({ msg: "Something Went Wrong" });
      console.log(error);
    } */
    console.log(_id);
  }
);

server.listen(PORT, () => {
  console.log("Server is Up On Port ");
});
