const express = require("express");
require("./services/passport");

const app = express();
require("./routes/authRoutes")(app);
//** app.get("/", (req, res) => {res.send({ bye:'buddy' });});

//http://console.developer.google.com/

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//http://localhost:5000/auth/google/callback?code=4/CQGRBm_NUSUgUC2fQXUdKLo0txhM9Odq3iwPGNBI14VTkeCHShtHEYuunhtWhSP7UO0JcqX8d0_1GvnRqEKULEw&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email
