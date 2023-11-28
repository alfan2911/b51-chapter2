const express = require("express");
const { Testimonial } = require("../controller/TestimonialController.js");

const router = express.Router();

router.get("/testimonials", Testimonial);

module.exports = router;
