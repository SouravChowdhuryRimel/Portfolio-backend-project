const educationModel = require("../models/educationModel");

//  Education Create
exports.createEducation = async (req, res) => {
  try {
    let { title, institute, description, time } = req.body;
    let data = await educationModel.create({
      title,
      institute,
      description,
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

// Education get all
exports.allEducation = async (req, res) => {
  try {
    let data = await educationModel.find();

    res.status(200).json({
      success: true,
      message: "Education is :",
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

// Education single data
exports.singleEducation = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await educationModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Single Education is :",
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

// Education single data update
exports.updateEducation = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, institute, description, time } = req.body;
    let data = await educationModel.findByIdAndUpdate(
      id,
      { title, institute, description, time },
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

// Education single data delete
exports.deleteEducation = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await educationModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Education delete successfully.",
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
