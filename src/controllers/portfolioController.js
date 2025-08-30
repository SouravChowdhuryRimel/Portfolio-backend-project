const portfolioModel = require("../models/portfolioModel");

//  Portfolio Create
exports.createPortfolio = async (req, res) => {
  try {
    let { title, img, link, category } = req.body;
    let data = await portfolioModel.create({
      title,
      img,
      link,
      category,
    });

    res.status(200).json({
      success: true,
      message: "Portfolio create successfully",
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

// Portfolio get all
exports.allPortfolio = async (req, res) => {
  try {
    let data = await portfolioModel.find();

    res.status(200).json({
      success: true,
      message: "Portfolio is :",
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

// Portfolio single data
exports.singlePortfolio = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await portfolioModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Single Portfolio is :",
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

// Portfolio single data update
exports.updatePortfolio = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, img, link, category } = req.body;
    let data = await portfolioModel.findByIdAndUpdate(
      id,
      { title, img, link, category },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Portfolio update successfully.",
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

// Portfolio single data delete
exports.deletePortfolio = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await portfolioModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Portfolio delete successfully.",
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
