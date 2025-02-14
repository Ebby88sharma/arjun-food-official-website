const express = require("express");
const router = express.Router();

// Sample product data
const products = [
  { id: 1, name: "Basmati Rice", price: 10, category: "Grains" },
  { id: 2, name: "Garam Masala", price: 5, category: "Spices" },
  { id: 3, name: "Mango Pickle", price: 7, category: "Pickles" },
];

// Route to get all products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
