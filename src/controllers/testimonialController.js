const testimonialModel = require("../models/testimonialModel");

//  Testimonial Create
exports.createTestimonial = async (req, res) => {
  try {
    let { clientName, address, img, feedback } = req.body;
    let data = await testimonialModel.create({
      clientName,
      address,
      img,
      feedback,
    });

    res.status(200).json({
      success: true,
      message: "Testimonial create successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

// Testimonial get all
exports.allTestimonial = async (req, res) => {
  try {
    let data = await testimonialModel.find();

    res.status(200).json({
      success: true,
      message: "Testimonial is :",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

// Testimonial single data
exports.singleTestimonial = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await testimonialModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Single Testimonial is :",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

// Testimonial single data update
exports.updateTestimonial = async (req, res) => {
  try {
    let { id } = req.params;
    let { clientName, address, img, feedback } = req.body;
    let data = await testimonialModel.findByIdAndUpdate(
      id,
      { clientName, address, img, feedback },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Testimonial update successfully.",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

// Testmonial single data delete
exports.deleteTestimonial = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await testimonialModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Testimonial delete successfully.",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};
