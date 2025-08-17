const userModel = require("../models/userModel");
const { EncodeToken } = require("../utility/tokenHelper");
const bcrypt = require("bcrypt");

// Create User

exports.register = async (req, res) => {
  try {
    let { email, password } = req.body;
    let result = await userModel.create({ email, password });

    res.status(200).json({
      success: true,
      message: "User create successfully!",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      massage: "Something went wrong!",
    });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        massage: "Your Email does not match",
      });
    }

    // isMatch password
    let isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      let token = EncodeToken(user.email, user._id);

      let option = {
        maxAge: process.env.Cookie_Expire_Time,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("token", token, option);

      res.status(200).json({
        success: true,
        message: "Login success",
        user: {
          id: user._id,
          email: user.email,
        },
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password not match",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      massage: "Something went wrong!",
    });
  }
};

// Get user
exports.user = async (req, res) => {
  try {
    let email = req.headers.email;
    let matchStage = {
      $match: { email },
    };

    let project = {
      $project: {
        password: 0,
      },
    };

    let result = await userModel.aggregate([matchStage, project]);

    res.status(200).json({
      success: true,
      result: result[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

// User LogOut

exports.logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logout success.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

// User update
exports.userUpdate = async (req, res) => {
  try {
    let { email, password } = req.body;
    let userId = req.headers._id;
    let updatedData = { email };

    if (password) {
      let hassedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hassedPassword;
    }

    console.log(updatedData);

    // Update user
    await userModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "User data update",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};
