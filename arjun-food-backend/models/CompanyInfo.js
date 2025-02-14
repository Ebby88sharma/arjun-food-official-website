const mongoose = require("mongoose");

const CompanyInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  offerings: [{ type: String }], // List of product categories
  contact: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
});

module.exports = mongoose.model("CompanyInfo", CompanyInfoSchema);
