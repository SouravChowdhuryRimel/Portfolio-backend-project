const contactModel = require("../models/contactModel");

//  Contact Create
exports.createContact = async (req, res) => {
  try {
    let { name, email, website, message } = req.body;
    let data = await contactModel.create({
      name,
      email,
      website,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
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

// Contact get all
exports.allContact = async (req, res) => {
  try {
    let data = await contactModel.find();

    res.status(200).json({
      success: true,
      message: "Contact is :",
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

// Contact single data
exports.singleContact = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await contactModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Single Contact is :",
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

// Contact single data delete
exports.deleteContact = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await contactModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Contact message delete successfully.",
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
