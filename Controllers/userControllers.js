const users = require("../Model/userSchema");
const moment = require("moment");

exports.userPost = async (req, res) => {
  const { name, email, status } = req.body;
  if (!name || !email || !status) {
    res.status(400).json({ error: "All fields are required" });
  }
  try {
    const preUser = await users.findOne({ email: email });
    if (preUser) {
      res.status(400).json({ error: "User already exists" });
    } else {
      const dateCreate = moment(new Date()).format("YYYY-MM-DD");

      const userData = new users({
        name,
        email,
        status,
        dateCreated: dateCreate,
      });
      await userData.save();
      res.status(200).json(userData);
    }
  } catch (err) {
    res.status(400).json({ error: err });
    console.log("catch block error" + err);
  }
};

exports.allUsersGet = async (req, res) => {
  try {
    const usersData = await users.find();
    res.status(200).json(usersData);
  } catch (error) {
    res.status(400).json({ error: err });
    console.log("catch block error" + error);
  }
};

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUserData = await users.findOne({ _id: id });
    res.status(200).json(singleUserData);
  } catch (error) {
    res.status(400).json({ error: error });
    console.log("catch block error" + error);
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSpecificUser = await users.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteSpecificUser);
  } catch (err) {
    res.status(400).json({ error: err });
    console.log("catch block error");
  }
};
