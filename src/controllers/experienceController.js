const experienceModel = require("../models/experienceModel");

//  Experience Create
exports.createExperience = async (req, res) => {
  try {
    let { title, company, description, time } = req.body;
    let data = await experienceModel.create({
      title,
      company,
      description,
      time,
    });

    res.status(200).json({
      success: true,
      message: "Experience create successfully",
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

// Experience get all
exports.allExperience = async (req, res) => {
  try {
    let data = await experienceModel.find();

    res.status(200).json({
      success: true,
      message: "Experience is :",
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

// Experience single data
exports.singleExperience = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await experienceModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Experience is :",
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

// Experience single data update
exports.updateExperience = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, company, description, time } = req.body;
    let data = await experienceModel.findByIdAndUpdate(
      id,
      { title, company, description, time },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Experience update successfully.",
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

// Experience single data delete
exports.deleteExperience = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await experienceModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Experience delete successfully.",
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
