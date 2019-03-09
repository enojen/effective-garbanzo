const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys.js");
const app = express();
//** app.get("/", (req, res) => {res.send({ bye:'buddy' });});

//http://console.developer.google.com/
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile ", "email"]
  })
);
app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//http://localhost:5000/auth/google/callback?code=4/CQGRBm_NUSUgUC2fQXUdKLo0txhM9Odq3iwPGNBI14VTkeCHShtHEYuunhtWhSP7UO0JcqX8d0_1GvnRqEKULEw&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email
