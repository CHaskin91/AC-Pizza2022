const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51Ku4OLFbdjG8jqKTYtGQvsZHvAg8Jbx8B6k7ipXCMDAM7i3qibVYg5gjcsIxZkt36UXQ1td92yjYghLmnlQCF1k6004n7bEFVH"
);

router.post("/placeorder", (req, res) => {
  const { token, total, currentUser, cartItems } = req.body;
});

module.exports = router;
