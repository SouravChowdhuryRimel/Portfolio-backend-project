const serviceModel = require("../models/serviceModel");

//  Service Create
exports.createService = async (req, res) => {
  try {
    let { title, description, img } = req.body;
    let data = await serviceModel.create({
      title,
      description,
      img,
    });

    res.status(200).json({
      success: true,
      message: "Service create successfully",
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

// Service get all
exports.allService = async (req, res) => {
  try {
    let data = await serviceModel.find();

    res.status(200).json({
      success: true,
      message: "Service is :",
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

// Service single data
exports.singleService = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await serviceModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Single Service is :",
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

// Service single data update
exports.updateService = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, description, img } = req.body;
    let data = await serviceModel.findByIdAndUpdate(
      id,
      { title, description, img },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Service update successfully.",
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

// Service single data delete
exports.deleteService = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await serviceModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Service delete successfully.",
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
