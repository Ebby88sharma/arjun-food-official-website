const express = require("express");
const CompanyInfo = require("../models/CompanyInfo");
const logger = require("../middlewares/logger");

const router = express.Router();

// Get Company Info
router.get("/", async (req, res) => {
  try {
    logger.info("Fetching company info");
    const companyInfo = await CompanyInfo.findOne();
    res.json(companyInfo);
  } catch (err) {
    logger.error("Error fetching company info: " + err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
