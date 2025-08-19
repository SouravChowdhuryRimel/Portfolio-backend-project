const advantageModel = require("../models/advantageModel");

//  Advantage Create
exports.createAdvantage = async (req, res) => {
  try {
    let { title, category, percent, time } = req.body;
    let data = await advantageModel.create({
      title,
      category,
      percent,
      time,
    });

    res.status(200).json({
      success: true,
      message: "Education create successfully",
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

// Advantage get all
exports.allAdvantage = async (req, res) => {
  try {
    let data = await advantageModel.find();

    res.status(200).json({
      success: true,
      message: "Advantage is :",
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

// Advantage single data
exports.singleAdvantage = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await advantageModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Single Advantage is :",
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

// Advantage single data update
exports.updateAdvantage = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, cetagory, percent, time } = req.body;
    let data = await advantageModel.findByIdAndUpdate(
      id,
      { title, cetagory, percent, time },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Education update successfully.",
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

// Advantage single data delete
exports.deleteAdvantage = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await advantageModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Advantage delete successfully.",
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
