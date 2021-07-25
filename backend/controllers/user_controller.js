"use strict";

var mongoose = require("mongoose"),
  Task = mongoose.model("User");

exports.list_all_users = function (req, res) {
  try {
    Task.find({ isDeleted: false }, function (err, users) {
      if (err) res.status(200).send(err);
      res.status(200).json(users);
    });
  } catch (error) {
    res.status(400).send("Request Failed");
  }
};

// exports.list_all_deleted_newsletters = function (req, res) {
//   Task.find({ is_deleted: "1" }, function (err, event) {
//     if (err) res.send(err);
//     res.json(event);
//   });
// };

exports.create_a_user = function (req, res) {
  try {
    const new_user = new Task(req.body);
    new_user.save(function (err, user) {
      if (err) res.status(200).send(err);
      res.status(200).json(user);
    });
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.read_a_user = function (req, res) {
  try {
    Task.findById(req.params.userId, function (err, event) {
      if (err) res.status(200).send(err);
      res.status(200).json(event);
    });
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.update_a_user = function (req, res) {
  try {
    Task.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      { new: true },
      function (err, event) {
        if (err) res.status(200).send(err);
        res.status(200).json(event);
      }
    );
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.delete_a_user = function (req, res) {
  try {
    Task.findOneAndUpdate(
      { _id: req.params.userId },
      { isDeleted: true },
      (err, doc) => {
        if (err) {
          res.status(409).json({ message: err });
        } else if (!doc) {
          res.status(200).json({ message: "No Document Present" });
        } else {
          res.status(200).json({ message: "Successfully Deleted", doc });
        }
      }
    );
  } catch (error) {
    res.status(400).send("Request Failed");
    console.log(error);
  }
};

exports.authenticate_user = function (req, res) {
  try {
    Task.findOne({ email: req.body.email }, (err, doc) => {
      if (err) res.status(409).json({ message: err });
      else if (!doc)
        res.status(200).json("We don't have a registered user with this email");
      else {
        if (doc.password === req.body.password) {
          res.status(200).json(doc);
        } else res.status(200).json("Password Doesn't Match");
      }
    });
  } catch (error) {
    res.status(400).json("Request Failed");
    console.log(error);
  }
};
